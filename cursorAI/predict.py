import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.datasets import mnist

# Load the saved model
model = tf.keras.models.load_model('mnist_model.h5')

# Load the MNIST test data
(_, _), (test_images, test_labels) = mnist.load_data()

# Preprocess the data: resize, normalize and add a batch dimension
test_images = test_images.reshape((10000, 28, 28, 1)).astype('float32') / 255

# Make a prediction on the first image from the test set
sample = test_images[0:1]  # First image
prediction = model.predict(sample)
predicted_digit = np.argmax(prediction)

# Display the first image and the predicted digit
plt.imshow(test_images[0].reshape(28, 28), cmap='gray')
plt.title(f"Predicted Digit: {predicted_digit}")
plt.show()

print(f"Predicted digit: {predicted_digit}")
