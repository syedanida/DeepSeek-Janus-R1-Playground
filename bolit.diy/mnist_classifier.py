import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import mnist
import numpy as np

# Load and preprocess MNIST dataset
def load_data():
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    
    # Normalize pixel values between 0 and 1
    x_train = x_train.astype('float32') / 255
    x_test = x_test.astype('float32') / 255
    
    # Reshape images to include channel dimension
    x_train = x_train.reshape(-1, 28, 28, 1)
    x_test = x_test.reshape(-1, 28, 28, 1)
    
    # Convert labels to one-hot encoding
    y_train = tf.keras.utils.to_categorical(y_train)
    y_test = tf.keras.utils.to_categorical(y_test)
    
    return (x_train, y_train), (x_test, y_test)

# Create the CNN model
def create_model():
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(10, activation='softmax')
    ])
    
    return model

def main():
    # Load and preprocess data
    (x_train, y_train), (x_test, y_test) = load_data()
    
    # Create and compile model
    model = create_model()
    model.compile(optimizer='adam',
                 loss='categorical_crossentropy',
                 metrics=['accuracy'])
    
    # Train the model
    history = model.fit(x_train, y_train, 
                       epochs=10, 
                       batch_size=64,
                       validation_data=(x_test, y_test))
    
    # Evaluate the model
    test_loss, test_acc = model.evaluate(x_test, y_test)
    print(f'\nTest accuracy: {test_acc:.4f}')
    
    # Save the model
    model.save('mnist_model.h5')

if __name__ == "__main__":
    main() 