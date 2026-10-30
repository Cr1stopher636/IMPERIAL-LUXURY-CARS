const configurator = document.querySelector('#car-configurator');

if (configurator) {
    const modelSummary = document.querySelector('#summary-model');
    const priceSummary = document.querySelector('#summary-price');
    const exteriorSummary = document.querySelector('#summary-exterior');
    const interiorSummary = document.querySelector('#summary-interior');
    const extrasSummary = document.querySelector('#summary-extras');
    const previewImage = document.querySelector('.summary-image');

    const updateSummary = () => {
        const selectedModel = configurator.querySelector('input[name="modelo"]:checked');

        if (!selectedModel) {
            return;
        }

        const modelOption = selectedModel.closest('.model-option');
        modelSummary.textContent = modelOption.dataset.modelName;
        priceSummary.textContent = modelOption.dataset.priceDisplay;
        previewImage.src = modelOption.dataset.image;
        previewImage.alt = `${modelOption.dataset.modelName} seleccionado`;
        exteriorSummary.textContent = configurator.querySelector('#exterior').value;
        interiorSummary.textContent = configurator.querySelector('#interior').value;

        const selectedExtras = Array.from(
            configurator.querySelectorAll('input[name="extras"]:checked')
        ).map((extra) => extra.value);

        extrasSummary.textContent = selectedExtras.length > 0
            ? selectedExtras.join(', ')
            : 'Sin extras';
    };

    configurator.addEventListener('change', updateSummary);
    configurator.addEventListener('input', updateSummary);
    configurator.addEventListener('reset', () => {
        window.requestAnimationFrame(updateSummary);
    });

    updateSummary();
}
