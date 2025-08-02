from ultralytics import YOLO

# Load trained model
model = YOLO("runs/detect/train/weights/best.pt")  # or yolov8n.pt if not trained

# Run prediction on video and save results
model.predict(source="video.mp4", conf=0.3, save=True)
