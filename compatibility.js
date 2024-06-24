document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('compatibility-form');
    const resultSection = document.getElementById('result-section');
    const backToFormButton = document.getElementById('back-to-form-button');
    const formSection = document.querySelector('form');
    const checkCompatibilityButton = document.getElementById('check-compatibility-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const yourName = document.getElementById('your-name').value;
        const partnerName = document.getElementById('partner-name').value;

        displayResults(yourName, partnerName);
    });

    backToFormButton.addEventListener('click', function() {
        resultSection.classList.add('hidden'); // Sembunyikan bagian hasil
        formSection.classList.remove('hidden'); // Tampilkan formulir
        checkCompatibilityButton.classList.remove('hidden'); // Tampilkan tombol Check Compatibility
    });

    function displayResults(yourName, partnerName) {
        document.getElementById('display-your-name').textContent = `Nama Anda: ${yourName}`;
        document.getElementById('display-partner-name').textContent = `Nama Pasangan: ${partnerName}`;

        const { compatibility, reason } = calculateCompatibility(yourName, partnerName);
        document.getElementById('compatibility-result').textContent = `Tingkat Kecocokan: ${compatibility}%`;
        document.getElementById('compatibility-reason').textContent = reason;

        resultSection.classList.remove('hidden'); // Tampilkan bagian hasil
        formSection.classList.add('hidden'); // Sembunyikan formulir
        checkCompatibilityButton.classList.add('hidden'); // Sembunyikan tombol Check Compatibility
    }

    function calculateCompatibility(yourName, partnerName) {
        const getLetterValue = char => {
            const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return alphabets.indexOf(char) + 1;
        };

        const calculateNameValue = name => {
            return name.toUpperCase().split('').reduce((sum, char) => sum + getLetterValue(char), 0);
        };

        const yourValue = calculateNameValue(yourName);
        const partnerValue = calculateNameValue(partnerName);

        // Perhitungan tingkat kecocokan berdasarkan nilai nama
        const maxNameLength = Math.max(yourName.length, partnerName.length);
        let compatibility = Math.floor((yourValue / partnerValue) * 100) % 101;

        if (yourName.length !== partnerName.length) {
            compatibility -= Math.abs(yourName.length - partnerName.length) * 2;
        }

        compatibility = Math.max(compatibility, 0);

        // Alasan berdasarkan perhitungan
        let reason = '';
        if (compatibility > 80) {
            reason = 'Kalian memiliki banyak kesamaan dalam karakteristik dan nilai-nilai yang membuat hubungan kalian sangat harmonis.';
        } else if (compatibility > 60) {
            reason = 'Kalian memiliki beberapa perbedaan, tetapi ini bisa membuat hubungan kalian lebih menarik dan dinamis.';
        } else if (compatibility > 40) {
            reason = 'Kalian memiliki perbedaan yang cukup signifikan, tetapi dengan komunikasi dan pengertian, hubungan kalian bisa berkembang.';
        } else {
            reason = 'Kalian memiliki banyak perbedaan dalam karakteristik dan nilai-nilai, yang bisa menjadi tantangan dalam hubungan. Namun, dengan usaha dan kompromi, segala sesuatu mungkin terjadi.';
        }

        return { compatibility, reason };
    }
});
