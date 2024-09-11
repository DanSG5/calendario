document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: 600,  // Ajustar la altura del calendario
        locale: 'es', // Configurar el idioma a español
        headerToolbar: {
            left: 'title',
            center: 'dayGridMonth,timeGridWeek,timeGridDay',
            right: 'prev,next today'
        },
        titleFormat: { // Personaliza el formato del título
            month: 'long', // Nombre completo del mes
            year: 'numeric' // Año en formato numérico
        },
        dayHeaderFormat: { // Personaliza el formato de los encabezados de los días
            weekday: 'long' // Nombre completo del día de la semana
        },
        dateClick: function (info) {
            showImage(info.dateStr);  // Llama a la función cuando haces clic en un día
        }
    });
    calendar.render();
});

function showImage(date) {
    const modalImage = document.getElementById("modal-image");

    // Definir imágenes para fechas específicas
    const images = {
        '2024-09-10': 'images/10.jpg',
        '2024-09-11': 'images/11.jpg',
        '2024-09-12': 'images/12.jpg',
        // Agrega más fechas y sus imágenes correspondientes
    };

    if (images[date]) {
        modalImage.src = images[date];
        // Mostrar el modal usando Bootstrap
        var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
    }
}