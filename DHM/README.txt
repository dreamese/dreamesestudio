DREAMESE HOME MANAGER v0.1
============================

CÁCH MỞ
1. Giải nén Dreamese-Home-Manager-v0.1.zip.
2. Mở thư mục Dreamese_Home_Manager_v0.1.
3. Nhấp đúp index.html.
4. Dùng Chrome hoặc Microsoft Edge.

APP MỞ SẴN DỮ LIỆU TRANG CHỦ HIỆN TẠI
- 14 dự án tiêu biểu.
- 13 câu hỏi trong Góc giải đáp.
- 4 dịch vụ.
- Nội dung Hero Desktop và Mobile.
- Danh sách hình nền, đối tác, liên hệ và footer.

CÁC CHỨC NĂNG
- Mở và đọc lại một file dreamese.html hiện có.
- Sửa đường dẫn HOME.css, HOME.js và logo.
- Chọn MT Construction, TITAN Construction, cả hai hoặc không có đối tác.
- Sửa Hero Desktop/Mobile và danh sách hình nền.
- Sắp xếp hình nền, dự án, Q&A, dịch vụ và dòng liên hệ bằng kéo-thả.
- Thêm dự án trực tiếp từ file *.project.json của Dreamese Project Manager.
- Xem trước Desktop và Mobile.
- Xuất dreamese.html, JSON, ZIP hoặc ghi trực tiếp vào website.

NẠP THƯ MỤC WEBSITE
- Nhấn “Nạp thư mục website”.
- Chọn thư mục gốc website.
- App ghép các file hình với đường dẫn đang được sử dụng để hiện thumbnail.
- Các file hình không được tải lên Internet.

THÊM DỰ ÁN TỪ PROJECT MANAGER
1. Trong Dreamese Project Manager, tải file *.project.json.
2. Trong Home Manager, mở tab Dự án tiêu biểu.
3. Chọn “Thêm từ Project Manager”.
4. Có thể chọn nhiều JSON cùng lúc.
5. App tự lấy tên, slogan, loại hình, file HTML và ảnh đại diện.

FONT
- Avo dùng cho nội dung.
- God dùng cho tiêu đề.
- App tìm font trong Fonts/ hoặc ../Fonts/ của website.

LƯU Ý
- localStorage chỉ lưu nội dung và đường dẫn, không lưu file hình.
- Khi mở app lại, dùng “Nạp thư mục website” để hiện lại thumbnail thật.
- Nên thử trên một bản sao website trước khi ghi đè trang chính.


CẬP NHẬT v0.2 — PROJECT SLIDER TRONG KHUNG XEM TRƯỚC
- Bỏ giới hạn chỉ hiển thị 8 dự án.
- Không còn bố cục lưới 4 × 2.
- Desktop hiển thị 4 thẻ trong một hàng.
- Mobile hiển thị 1 thẻ trong một hàng.
- Nút trái/phải dịch lần lượt từng dự án.
- Có thể lăn chuột trên slider để chuyển từng dự án.
- File dreamese.html xuất ra vẫn chứa toàn bộ danh sách dự án.


CẬP NHẬT v0.3 — ĐÚNG LAYOUT WEBSITE DREAMESE
=============================================

DỰ ÁN TIÊU BIỂU
- Desktop là một slider một hàng, hiển thị 6 thẻ:
  [1] [2] [3] [4] [5] [6]
- Khi chuyển tiếp, slider dịch một thẻ:
  [2] [3] [4] [5] [6] [7]
- Không tạo hàng thứ hai.
- Không giới hạn tổng số dự án.
- Mobile vẫn hiển thị một thẻ mỗi lần.

TIÊU ĐỀ HERO
- “Những câu chuyện được kể lại bằng không gian sống thật.”
  được xem là một câu duy nhất.
- Trong app chỉ có một ô nhập tiêu đề.
- Nhấn Enter tại vị trí muốn xuống dòng để dàn layout.
- Phần trước và sau vị trí xuống dòng có cùng:
  font chữ, màu sắc, kích thước và mức độ nhấn.
- HTML vẫn dùng <br> và .hero-line để giữ bố cục tương thích HOME.css.


CẬP NHẬT v0.4 — KHÔI PHỤC LAYOUT PHẦN DƯỚI TRANG
==================================================

KHUNG XEM TRƯỚC ĐƯỢC ĐƯA VỀ BỐ CỤC CŨ:

1. GÓC GIẢI ĐÁP
- Danh sách câu hỏi dọc toàn chiều ngang.
- Có khung cuộn riêng.
- Không còn lưới hai cột.
- Khi nhấn câu hỏi, danh sách thu lại bên trái và nội dung mở bên phải.
- Có nút đóng để trở về danh sách toàn chiều ngang.

2. DỊCH VỤ / QUY TRÌNH
- 4 thẻ nằm cùng một hàng trên Desktop.
- Nền thẻ trong suốt để nhìn thấy ảnh nền chung.
- Có mô tả và dòng “Quy trình triển khai →”.
- Hiệu ứng hover viền vàng và nâng thẻ.

3. LIÊN HỆ
- Tiêu đề căn trái và có gạch nhấn bên dưới.
- Tagline và các dòng liên hệ căn trái.
- Không còn bố cục dồn giữa trang.

4. FOOTER
- Bản quyền bên trái.
- “In collaboration with” và các đối tác bên phải.
- HTML xuất ra dùng lại đúng cấu trúc footer của dreamese.html cũ.

5. ẢNH NỀN
- Ảnh nền chung tiếp tục chạy xuyên suốt phía sau Q&A, Dịch vụ và Liên hệ.
- Các section dùng lớp nền tối trong suốt thay vì khối đen đặc.


CẬP NHẬT v0.5 — TÙY CHỈNH THẺ DỰ ÁN
====================================
- Chiều cao: 180–700 px, mặc định 450 px.
- Khoảng hở: 0–60 px, mặc định 24 px.
- Bo góc: bật/tắt; bán kính 1–40 px, mặc định 4 px.
- Đồng bộ khung xem trước, JSON và dreamese.html xuất ra.
- dreamese.html có style #dreamese-project-layout đặt sau HOME.css.


CẬP NHẬT v0.6 — CHIỀU CAO HERO
===============================

Trong tab “Hero & hình nền” có thêm:
- Chiều cao Hero Desktop: 60–150vh.
- Chiều cao Hero Mobile: 60–150vh.
- Mặc định: 100vh cho cả hai.
- Có nút khôi phục mặc định.

100vh tương đương chiều cao vùng hiển thị của trình duyệt.

Thay đổi được đồng bộ với:
- Khung xem trước.
- localStorage.
- File *.home.json.
- dreamese.html xuất ra.
- Gói ZIP.

Bản v0.6 cũng khôi phục đầy đủ giao diện tùy chỉnh thẻ dự án
đã được bổ sung trong v0.5.


CẬP NHẬT v0.7 — MỞ RỘNG PHẠM VI CHIỀU CAO
===========================================
- Hero Desktop: 25–200vh.
- Hero Mobile: 25–200vh.
- Chiều cao hình dự án: 25–900px.
- Bước điều chỉnh: 5.
- Mặc định vẫn giữ 100vh cho Hero và 450px cho hình dự án.


CẬP NHẬT v0.8 — TỪ NỀN v0.7
- Chỉ bổ sung 6 tùy chỉnh kích thước chữ Hero Desktop/Mobile.
- Giữ nguyên layout và thao tác dự án tiêu biểu của v0.7.


CẬP NHẬT v0.8.1 — KHÔI PHỤC PROJECT SLIDER GỐC
================================================
- Khung xem trước dùng lại hình học của HOME.css gốc.
- Thẻ Desktop rộng cố định 350px, không chia đều thành 6 cột.
- Wrapper rộng 110%, lệch trái -5%.
- Nút điều hướng tròn nằm đè trên hai mép slider.
- Desktop lăn chuột từng thẻ bằng translate3d.
- Mobile kéo tay từng thẻ, chiều rộng min(350px, 82vw).
- Giữ nguyên tùy chỉnh chiều cao, gap, bo góc và typography Hero.
- HTML xuất ra vẫn dùng đúng .project-wrapper, .project-track và .project của website gốc.


CẬP NHẬT v0.8.2 — PREVIEW ĐÚNG TỶ LỆ WEBSITE
==============================================
- Preview Desktop thu nhỏ tỷ lệ từ viewport thiết kế 1600px.
- Kích thước 350×450px, khoảng hở và nút điều hướng được thu nhỏ đồng tỷ lệ.
- Preview hiển thị khoảng 4 thẻ đầy đủ và một phần thẻ tiếp theo giống website gốc.
- HTML xuất ra vẫn giữ kích thước thật, không bị thu nhỏ.


CẬP NHẬT v0.8.3 — PREVIEW KHỚP HOME.css GỐC
============================================

Đã kiểm tra theo HOME.css thực tế:

DESKTOP
- section: padding 120px 10%.
- project-wrapper: width 110%, margin-left -5%.
- project-track: display flex, gap theo thiết lập.
- project: rộng gốc 350px, chiều cao theo thiết lập.
- project-content: padding 25px 20px.
- nút điều hướng nằm chồng ở 5% hai mép.

SỬA LỖI QUAN TRỌNG
- Iframe Preview rộng dưới 600px từng kích hoạt nhầm media query Mobile
  ngay cả khi nút Desktop đang được chọn.
- Từ v0.8.3, chế độ Desktop/Mobile do nút của app quyết định bằng class:
  preview-desktop / preview-mobile.
- Desktop không còn bị thẻ Mobile 82vw ghi đè.
- Mobile dùng native horizontal scrolling + scroll-snap.

Việc thu tỷ lệ chỉ dùng trong Preview.
dreamese.html xuất ra vẫn dùng kích thước thật từ HOME.css.


CẬP NHẬT v0.8.4 — CĂN TRÊN / DƯỚI CHO HERO
===========================================

Hero giờ có hai nhóm điều khiển độc lập:

1. CHIỀU CAO
- Desktop và Mobile theo vh.

2. CĂN DỌC VÀ KHOẢNG TRỐNG
- Căn phía trên.
- Căn giữa trên và dưới.
- Căn phía dưới.
- Khoảng trống phía trên và phía dưới riêng.
- Desktop và Mobile độc lập.

Mặc định:
- Desktop: căn giữa, trên 120px, dưới 120px.
- Mobile: căn giữa, trên 100px, dưới 100px.

Khi tăng chiều cao Hero và chọn “Căn giữa trên và dưới”,
phần không gian tăng thêm được phân bổ cân đối ở cả phía trên và phía dưới
nội dung, đúng với vùng khoanh đỏ trong hình mô tả.

Các giá trị được áp dụng cho:
- Preview.
- localStorage.
- JSON.
- dreamese.html.
- ZIP.
