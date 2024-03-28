// src/services/gpt3Service.js

// This function mocks the fetching of GPT-3 content
export const fetchGPT3Content = async (prompt) => {
    // Return a simulated response after a short delay to mimic network request
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Simulated response for prompt: ${prompt}`);
        }, 500); // Simulate a 500ms network delay
    });
};
