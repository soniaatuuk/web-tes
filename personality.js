document.addEventListener('DOMContentLoaded', () => {
    const personalityTestForm = document.getElementById('personality-test-form');
    const resultSection = document.getElementById('result-section');
    const backToFormButton = document.getElementById('back-to-form-button');
    const resultDisplay = document.getElementById('result-display');

    personalityTestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const answers = new FormData(personalityTestForm);
        const scores = {
            introvert: 0,
            extrovert: 0
        };

        for (let [key, value] of answers.entries()) {
            if (value === "1") {
                scores.introvert += 1;
            } else if (value === "2") {
                scores.extrovert += 2;
            }
        }

        let personalityType;
        if (scores.introvert > scores.extrovert) {
            personalityType = 'Anda lebih cenderung introvert.';
        } else if (scores.extrovert > scores.introvert) {
            personalityType = 'Anda lebih cenderung ekstrovert.';
        } else {
            personalityType = 'Anda memiliki kecenderungan seimbang antara introvert dan ekstrovert.';
        }

        displayResult(personalityType);
    });

    backToFormButton.addEventListener('click', function() {
        resultSection.classList.add('hidden');
        personalityTestForm.classList.remove('hidden');
    });

    function displayResult(personalityType) {
        resultDisplay.textContent = personalityType;
        resultSection.classList.remove('hidden');
        personalityTestForm.classList.add('hidden');
    }
});