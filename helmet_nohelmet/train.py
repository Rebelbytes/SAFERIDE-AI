from ultralytics import YOLO

# Load pretrained YOLOv8n model
model = YOLO("yolov8n.pt")


# Train the model for 1 epoch on your dataset
model.train(
    data="dataset/data.yaml", 
    epochs=5,
    imgsz=640,
    batch=16
)
