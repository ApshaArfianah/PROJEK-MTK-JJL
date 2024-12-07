// Kalkulator Diskon
function calculateDiscount() {
    const price = parseFloat(document.getElementById("price").value); // Ambil harga awal
    const discount = parseFloat(document.getElementById("discount").value); // Ambil diskon

    if (isNaN(price) || isNaN(discount)) {
        document.getElementById("discountResult").innerText = "Harap masukkan angka yang valid!";
        return;
    }

    const discountedPrice = price - (price * discount / 100); // Hitung harga setelah diskon
    document.getElementById("discountResult").innerText = `Harga setelah diskon: Rp ${discountedPrice.toFixed(2)}`; // Tampilkan hasil
}

// Kalkulator Persentase
function calculatePercentage() {
    const initialValue = parseFloat(document.getElementById("initialValue").value); // Nilai awal
    const finalValue = parseFloat(document.getElementById("finalValue").value); // Nilai akhir

    if (isNaN(initialValue) || isNaN(finalValue) || initialValue === 0) {
        document.getElementById("percentageResult").innerText = "Harap masukkan nilai yang valid dan pastikan nilai awal tidak nol!";
        return;
    }

    const percentageChange = ((finalValue - initialValue) / initialValue) * 100; // Hitung perubahan persentase
    document.getElementById("percentageResult").innerText = `Perubahan: ${percentageChange.toFixed(2)}%`; // Tampilkan hasil
}

// Konversi Suhu
function convertTemperature() {
    const celsius = parseFloat(document.getElementById("celsius").value); // Ambil suhu dalam Celsius

    if (isNaN(celsius)) {
        document.getElementById("temperatureResult").innerText = "Harap masukkan angka yang valid!";
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32; // Konversi ke Fahrenheit
    document.getElementById("temperatureResult").innerText = `${celsius}°C sama dengan ${fahrenheit.toFixed(2)}°F`s; // Tampilkan hasil
}