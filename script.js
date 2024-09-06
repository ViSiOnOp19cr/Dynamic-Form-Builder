// Get references to elements
const inputType = document.getElementById('input-type');
const addFieldBtn = document.getElementById('add-field-btn');
const formPreview = document.getElementById('form-preview');
const fieldLabelInput = document.getElementById('field-label');

// Add event listener to the 'Add Field' button
addFieldBtn.addEventListener('click', () => {
    const selectedType = inputType.value;
    const fieldLabel = fieldLabelInput.value;

    if (!fieldLabel) {
        alert('Please enter a field label');
        return;
    }

    // Create different fields based on the selected type
    let newField;
    switch (selectedType) {
        case 'text':
            newField = createTextInput(fieldLabel);
            break;
        case 'checkbox':
            newField = createCheckboxInput(fieldLabel);
            break;
        case 'radio':
            newField = createRadioButton(fieldLabel);
            break;
        default:
            break;
    }

    // Append the new field to the form preview
    if (newField) {
        formPreview.appendChild(newField);
    }

    // Clear the field label input after adding the field
    fieldLabelInput.value = '';
});

// Function to create a text input field
function createTextInput(labelText) {
    const container = document.createElement('div');
    container.classList.add('field-container');

    const label = document.createElement('label');
    label.textContent = labelText + ':';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter text here';

    container.appendChild(label);
    container.appendChild(input);
    return container;
}

// Function to create a checkbox input field
function createCheckboxInput(labelText) {
    const container = document.createElement('div');
    container.classList.add('field-container');

    const label = document.createElement('label');
    label.textContent = labelText + ': ';

    const input = document.createElement('input');
    input.type = 'checkbox';

    container.appendChild(label);
    container.appendChild(input);
    return container;
}

// Function to create a radio button input field
function createRadioButton(labelText) {
    const container = document.createElement('div');
    container.classList.add('field-container');

    const label = document.createElement('label');
    label.textContent = labelText + ': ';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'radio-group';  // Ensure radio buttons belong to the same group

    container.appendChild(label);
    container.appendChild(input);
    return container;
}
