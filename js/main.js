if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('Service Worker đã đăng ký thành công:', registration);
        })
        .catch(error => {
          console.log('Đăng ký Service Worker thất bại:', error);
        });
  });
}

// Xử lý sự kiện khi ứng dụng được khởi động
window.addEventListener('DOMContentLoaded', () => {
  console.log('Ứng dụng đã được khởi động!')
  // Gán các sự kiện và chức năng của ứng dụng PWA ở đây
});