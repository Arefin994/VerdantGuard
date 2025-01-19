# 🌱 VerdantGuard: Plant Disease Prediction Web App 🌿

VerdantGuard is an advanced plant disease prediction web application designed to help users identify plant diseases using cutting-edge AI models. This project includes a **React frontend**, a **Node.js backend**, and a **Flask-based Deep Learning API** for real-time disease detection. 🚀

---

## ✨ Features

- 🗼️ Upload images of plants for disease prediction.
- 📊 View detailed prediction results with confidence scores.
- 🌐 Fully responsive and user-friendly interface.
- 🔄 Real-time API integration for fast and accurate predictions.
- 🔐 Secure and robust backend with token-based authentication.

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express.js
- **ML API:** Flask + TensorFlow + OpenCV
- **Database:** MongoDB

---

## ⚙️ Installation & Setup

Follow the steps below to run the project locally.

### Prerequisites
Make sure you have the following installed:
- Node.js >= 16.x
- Python >= 3.8
- MongoDB (Local or Atlas)

### 1⃣ Clone the Repository
```bash
git clone https://github.com/your-username/VerdantGuard.git
cd VerdantGuard
```

### 2⃣ Frontend Setup
Navigate to the `VerdantGuard_Frontend` folder:
```bash
cd VerdantGuard_Frontend
npm install
npm run dev
```

### 3⃣ Backend Setup
Navigate to the `VerdantGuard_Backend` folder:
```bash
cd ../VerdantGuard_Backend
npm install
npm run serve
```

### 4⃣ Flask API Setup
Navigate to the `VerdantGuard_Model_Api_Flask` folder:
```bash
cd ../VerdantGuard_Model_Api_Flask
pip install -r requirements.txt
python api.py
```

---

## 🌟 Usage

1. Start all three services: **Frontend**, **Backend**, and **Flask API**.
2. Open the frontend in your browser: [http://localhost:5173](http://localhost:5173)
3. Upload a plant image, and the app will return the predicted disease and confidence score.

---

## 📁 Project Structure

```plaintext
VerdantGuard/
├── VerdantGuard_Frontend/       # React frontend
├── VerdantGuard_Backend/        # Node.js backend
├── VerdantGuard_Model_Api_Flask/ # Flask API for ML model
└── README.md                    # Project documentation
```

---

### 📷 Screenshots (Optional)
Will add later 

---


## 🌍 Environment Variables

Ensure you set up the following `.env` files:

### Frontend (`VerdantGuard_Frontend/.env`)
```plaintext
VITE_API_URL=http://localhost:5000
```

### Backend (`VerdantGuard_Backend/.env`)
```plaintext
MONGO_URI=mongodb://localhost:27017/verdantguard
JWT_SECRET=your-secret-key
PORT=5000
```

### Flask API (`VerdantGuard_Model_Api_Flask/.env`)
```plaintext
MODEL_PATH=./models/disease_model.h5
```

---

## 🤝 Contributing

Feel free contributions to improve VerdantGuard! Create an issue or submit a pull request to suggest enhancements. 💡

---



## 🚀 About the Author

Developed with ❤️ by [Arefin Amin](https://github.com/arefinamin). Connect with me on [LinkedIn](https://linkedin.com/in/arefinamin) or check out my other projects on [GitHub](https://github.com/arefinamin).

---


