from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all domains (or specific domains)
CORS(app, resources={r"/predict": {"origins": "http://localhost:5173"}})
# Load the model
model = load_model('app/trained_model/PlantDiseaseModel.keras')  # Make sure the path is correct

# Class labels mapping
class_names = {
    "0": "Apple___Apple_scab", "1": "Apple___Black_rot", "2": "Apple___Cedar_apple_rust", "3": "Apple___healthy",
    "4": "Blueberry___healthy", "5": "Cherry_(including_sour)___Powdery_mildew", "6": "Cherry_(including_sour)___healthy",
    "7": "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot", "8": "Corn_(maize)___Common_rust_", "9": "Corn_(maize)___Northern_Leaf_Blight",
    "10": "Corn_(maize)___healthy", "11": "Grape___Black_rot", "12": "Grape___Esca_(Black_Measles)", "13": "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    "14": "Grape___healthy", "15": "Orange___Haunglongbing_(Citrus_greening)", "16": "Peach___Bacterial_spot", "17": "Peach___healthy",
    "18": "Pepper,_bell___Bacterial_spot", "19": "Pepper,_bell___healthy", "20": "Potato___Early_blight", "21": "Potato___Late_blight",
    "22": "Potato___healthy", "23": "Raspberry___healthy", "24": "Soybean___healthy", "25": "Squash___Powdery_mildew",
    "26": "Strawberry___Leaf_scorch", "27": "Strawberry___healthy", "28": "Tomato___Bacterial_spot", "29": "Tomato___Early_blight",
    "30": "Tomato___Late_blight", "31": "Tomato___Leaf_Mold", "32": "Tomato___Septoria_leaf_spot", "33": "Tomato___Spider_mites Two-spotted_spider_mite",
    "34": "Tomato___Target_Spot", "35": "Tomato___Tomato_Yellow_Leaf_Curl_Virus", "36": "Tomato___Tomato_mosaic_virus", "37": "Tomato___healthy"
}

# Define a route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get the image from the POST request
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Read image
    img = Image.open(io.BytesIO(file.read()))
    img = img.resize((224, 224))  # Resize image to match the model input size

    # Convert image to array
    img_array = np.array(img) / 255.0  # Normalize if needed
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Predict using the model
    prediction = model.predict(img_array)

    # Assuming the model outputs a class index or probability
    predicted_class_index = np.argmax(prediction, axis=1)[0]
    
    # Map the predicted class index to the corresponding class name
    predicted_class_name = class_names[str(predicted_class_index)]  # Use str() to match the dictionary keys
    
    return jsonify({'prediction': predicted_class_name})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
