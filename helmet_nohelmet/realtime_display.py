from ultralytics import YOLO
import cv2

# Load model
model = YOLO("runs/detect/train/weights/best.pt")

# Class IDs for helmet detection
HELMET_CLASSES = {1: "No Helmet", 2: "Helmet"}

# Load video
cap = cv2.VideoCapture("video.mp4")

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    results = model(frame, conf=0.3)[0]

    for box in results.boxes:
        cls_id = int(box.cls[0])
        if cls_id not in HELMET_CLASSES:
            continue  # skip other classes

        label = f"{HELMET_CLASSES[cls_id]} {float(box.conf[0]):.2f}"
        x1, y1, x2, y2 = map(int, box.xyxy[0])

        # Color based on class
        color = (0, 255, 0) if cls_id == 2 else (0, 0, 255)

        cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)
        cv2.putText(frame, label, (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

    cv2.imshow("Helmet Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
