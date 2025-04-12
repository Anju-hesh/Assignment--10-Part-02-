document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkIn').min = today;
    
    // document.getElementById('checkIn').addEventListener('change', function() {
    //   const checkOut = document.getElementById('checkOut');
    //   checkOut.min = this.value;
    //   if (checkOut.value && checkOut.value < this.value) {
    //     checkOut.value = '';
    //   }
    // });
    
    // document.getElementById('bookingForm').addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   alert('Booking request submitted! We will contact you shortly.');
    // });
  });