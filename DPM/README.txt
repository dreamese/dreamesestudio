DREAMESE PROJECT MANAGER v0.5
================================

TÍNH NĂNG MỚI — GIỮ PREVIEW SAU KHI ĐÓNG APP

Bản cũ chỉ lưu nội dung và tên file ảnh trong localStorage.
File ảnh và đường dẫn blob: chỉ tồn tại trong phiên đang mở, nên khi
đóng trình duyệt rồi mở lại, app không còn thumbnail thật.

Bản v0.5 dùng hai lớp lưu trữ:

- localStorage: thông tin dự án, thứ tự ảnh, tiêu đề và mô tả.
- IndexedDB: file ảnh thật dùng cho thumbnail, Hero preview và xuất ZIP.

VÌ VẬY
- Sau khi nạp ảnh, app tự ghi ảnh vào IndexedDB.
- Bấm “Lưu dự án và ảnh” để chắc chắn dự án được lưu đầy đủ.
- Khi đóng app rồi mở lại, ảnh được khôi phục tự động.
- Ảnh chỉ nằm trên máy và trong hồ sơ trình duyệt hiện tại.
- Ảnh không được tải lên Internet.

DỰ ÁN ĐÃ LƯU BẰNG BẢN CŨ

Dữ liệu cũ vẫn được đọc, nhưng bản cũ chưa từng lưu file ảnh thật.
Với mỗi dự án cũ:

1. Mở dự án trong danh sách.
2. Vào “Hình ảnh & Hero”.
3. Nhấn “Nạp thư mục hình”.
4. Chọn đúng thư mục hình của dự án.
5. App tự khớp theo tên file.
6. Bấm “Lưu dự án và ảnh”.

Từ lần tiếp theo, mở dự án sẽ thấy lại toàn bộ preview.

LƯU Ý

- Không xóa dữ liệu trang web của Chrome/Edge nếu muốn giữ kho ảnh.
- Không dùng chế độ Ẩn danh.
- Nên tiếp tục lưu file *.project.json và thư mục PROJECTS làm bản sao.
- Khi chuyển sang máy tính hoặc trình duyệt khác, IndexedDB không tự đi theo;
  hãy mở JSON/HTML và nạp lại thư mục hình một lần.
- Nếu dự án có rất nhiều ảnh độ phân giải cao, trình duyệt có thể cần nhiều
  dung lượng ổ đĩa.


CẬP NHẬT v0.6 — SỬA VỊ TRÍ HERO
---------------------------------
- File HTML xuất ra luôn có:
  data-hero-position-y="..."
  background-position: center ...% !important;
- Giá trị inline này ghi đè thiết lập cố định:
  .story-bg { background-position: center 80%; }
- Khi mở lại HTML, app đọc data-hero-position-y trước.
- Khung chỉnh Hero đổi sang tỷ lệ ngang 16:7 để nhìn rõ ảnh dịch lên/xuống.
- Preview trang cũng dùng background-position có ưu tiên cao.

VỚI HTML CŨ
HTML cũ không có background-position riêng vẫn dùng center 80% từ CSS.
Hãy mở HTML bằng v0.6 và xuất lại, hoặc thêm thủ công:

background-position: center 40% !important;

vào style của .story-bg.
