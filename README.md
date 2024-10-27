
**MedDiagnosisAIs** is a sophisticated AI-powered web application designed to assist users in identifying potential symptoms based on a provided description of their illness. Built with **Django** and leveraging advanced transformer models, the app generates diverse and dynamic responses to user inputs, offering a unique experience with each query. 

By utilizing transformer models pre-trained on **Hugging Face** and implemented via **PyTorch**, this application provides an intelligent interface for symptom diagnosis that evolves with each use. 

## Project Overview

**Transformer Discess Diagnosis** allows users to input a description of their illness into a chatbox and receive a dynamically generated list of corresponding symptoms. The system provides different responses for the same input due to the inherent variability of the AI model, simulating the nuanced nature of real-world symptom analysis.

This project is built using **Django** as the backend framework to manage the web interface, along with **PyTorch** for executing the transformer model. Due to hardware constraints, the application requires a **CUDA-enabled GPU** and is optimized for **Windows** operating systems.

### Key Features:

- **AI-Driven Symptom Diagnosis**: Users can input their sickness, and the app generates a list of potential symptoms. Each query produces different results, offering a dynamic and evolving diagnostic experience.
- **Transformer Model Integration**: Powered by pre-trained transformer models from Hugging Face, ensuring the accuracy and flexibility of the results.
- **Built with Django**: Django provides a robust and scalable backend for handling user inputs and managing the interface.
- **PyTorch-Based Model**: The transformer model is executed using PyTorch, leveraging its powerful deep learning capabilities.
- **CUDA-Enabled GPU Support**: The application requires a CUDA-enabled GPU for optimal performance, making it currently available only on Windows systems.

## System Requirements

- **CUDA-enabled GPU**: Necessary for running the PyTorch model.
- **Operating System**: Windows is the supported operating system due to CUDA requirements.
- **Django**: This project uses Django for the backend to manage the web interface and process user requests.

## How It Works

1. The user navigates to the web interface, built using Django, and enters a description of their illness into the chatbox.
2. The AI model, running on PyTorch, processes the input using the pre-trained transformer model.
3. The system returns a list of potential symptoms, with each response being unique due to the variability of the AI-driven model.

## License

This project is licensed under the MIT License. 

## Acknowledgements

We would like to thank the Hugging Face community for the transformer models, the PyTorch community for their robust AI framework, and the Django team for their excellent web development framework.
