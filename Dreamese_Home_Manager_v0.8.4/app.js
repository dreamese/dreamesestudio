(() => {
    "use strict";
    const DEFAULT_STATE = {
  "id": "dreamese-home-current",
  "settings": {
    "fileName": "dreamese.html",
    "pageTitle": "Dreamese - Kiến trúc & Nội thất",
    "cssPath": "HOME.css",
    "jsPath": "HOME.js",
    "logoPath": "Dreamese_Studio.png"
  },
  "partners": [
    "mt"
  ],
  "sectionTitles": {
    "projects": "Dự án tiêu biểu",
    "qna": "Góc giải đáp",
    "services": "Dịch vụ",
    "contact": "Liên hệ"
  },
  "hero": {
    "desktopTop": "Những câu chuyện được kể lại",
    "desktopBottom": "bằng không gian sống thật.",
    "desktopParagraphs": [
      "Chúng tôi tin rằng, mỗi công trình thiết kế luôn bắt đầu từ con người và những câu chuyện mang tính ước vọng.",
      "Ở Dreamese, Kiến trúc sư đóng vai trò như những Dịch giả biến những câu chuyện,\n                những ước vọng tưởng chừng như rất mơ hồ thành không gian sống đích thực.",
      "Ở Dreamese, chúng tôi tôn trọng, trân quý và luôn luôn lắng nghe khách hàng 1 cách chân thành nhất\n                để mọi công trình là những chặng đường đáng nhớ và mang tính thành tựu."
    ],
    "mobileTop": "Thiết kế không gian",
    "mobileBottom": "kể câu chuyện của bạn",
    "mobileParagraph": "Dreamese Studio đồng hành kiến tạo không gian sống\n                mang đậm dấu ấn cá nhân và giá trị bền vững.",
    "note": "DREAMESE STUDIO — Dịch giả ngôn ngữ giấc mơ",
    "backgrounds": [
      {
        "id": "d8fc21c8-7d86-49ce-b9b5-4c2652d85352",
        "path": "PROJECTS/RUSTANIA/A_ExC_001.1.png"
      },
      {
        "id": "57021e3a-6016-41a4-b367-3018aa84b898",
        "path": "PROJECTS/Lean_Villa/ExC_05.3.jpg"
      },
      {
        "id": "1d509cbe-d32b-448b-9e9c-85d48f3e706b",
        "path": "PROJECTS/TT_Villa/ExC_01.1.jpg"
      },
      {
        "id": "eaa6c7c6-f1a4-4ef1-839b-fe15894f024b",
        "path": "PROJECTS/TouchHome/ExC_01.1.png"
      },
      {
        "id": "d45e1fb1-f853-4dad-aef2-70986f0b8a33",
        "path": "PROJECTS/TVT_House/C1.jpg"
      },
      {
        "id": "152abe33-85ce-45b7-8726-d2d4d02ea2db",
        "path": "PROJECTS/PN1/PN1_ExC_09.1.png"
      },
      {
        "id": "4eb9585f-751e-4b3c-884e-800a5ae611fb",
        "path": "PROJECTS/Thu_Dieu/ExC_01.2.jpg"
      },
      {
        "id": "ebbe26ce-4fe4-447f-a293-3810962a0f7f",
        "path": "PROJECTS/TranPhuong_Villa/TP-Villa_Terrace_01.png"
      },
      {
        "id": "a8eca85d-baf3-4134-b034-ec26461202d9",
        "path": "PROJECTS/Lavender/C8.jpg"
      },
      {
        "id": "a9c51b3c-4fa5-4bc5-98b3-507f1fd785b8",
        "path": "PROJECTS/TN_Cottage/TN_Bal_02.jpg"
      },
      {
        "id": "1b26bc84-5281-40a6-b579-c343fbe3b4f4",
        "path": "PROJECTS/ThanVanNhiep/C8.jpg"
      },
      {
        "id": "f9d68faa-fe49-43e1-ba99-8d1e03cfcf70",
        "path": "PROJECTS/Ada_Office/Ada_0F_03.2.png"
      }
    ],
    "preloadPath": "PROJECTS/RUSTANIA/A_ExC_001.1.png"
  },
  "projects": [
    {
      "id": "6454df51-bb7b-4254-8999-ce80f4f93fa6",
      "href": "Rustania.html",
      "title": "Rustania Homes",
      "slogan": "Trải nghiệm sức sống mới",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/RUSTANIA/A_ExC_008.1.png"
    },
    {
      "id": "bfa9e817-a6c6-4136-91ff-0202139e3d20",
      "href": "Lean_Villa.html",
      "title": "Lean Villa",
      "slogan": "Điểm tựa tinh thần",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/Lean_Villa/ExC_05.2.jpg"
    },
    {
      "id": "b41c8def-f27a-404f-a5fa-10ef63f87ead",
      "href": "TT_Villa.html",
      "title": "T&T Villa",
      "slogan": "Sự tương phản trong ánh nhìn",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/TT_Villa/ExC_06.1.jpg"
    },
    {
      "id": "374b6f25-e16c-4b1f-8a22-cbe17cc6fd56",
      "href": "NamThien1.html",
      "title": "Thu Điếu",
      "slogan": "Nốt nhạc tĩnh của thanh âm",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/Thu_Dieu/ExC_01.2.jpg"
    },
    {
      "id": "a84ba8ec-8d3c-4273-b7cb-177e7a3f77c1",
      "href": "SimplePC.html",
      "title": "Mr Đặng Villa",
      "slogan": "Không phù phiếm",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/SimplePC/Ext_001.3.png"
    },
    {
      "id": "9e99fbc1-f5e3-49cb-9068-26520b2fb7c8",
      "href": "TVT.html",
      "title": "TVT Home",
      "slogan": "Trỗi dậy và Bức phá",
      "category": "Nhà phố",
      "imagePath": "PROJECTS/TVT_House/F1.jpg"
    },
    {
      "id": "dd6cd2dd-75a7-48d5-968c-731a07d645ad",
      "href": "Chateur.html",
      "title": "Breath Villa",
      "slogan": "Lắng nghe những nhịp chậm",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/Chateur_QL_Villa/Chateur_ExC_02.jpg"
    },
    {
      "id": "f8fde107-d578-4f9a-b1ad-1ced700b64f5",
      "href": "TranPhuong.html",
      "title": "Cù Lao Villa",
      "slogan": "Theo luồng cảm xúc",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/TranPhuong_Villa/TP-Villa_Up_02.1.png"
    },
    {
      "id": "76b3897a-5ec1-446a-b6f3-2ceb492be5d5",
      "href": "PN1.html",
      "title": "Nhuận Home",
      "slogan": "Về nhà",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/PN1/PN1_ExC_09.1.png"
    },
    {
      "id": "171b8b45-b83a-4dab-af53-9b6801a8520b",
      "href": "Touch.html",
      "title": "Touch House",
      "slogan": "Điểm chạm của không gian",
      "category": "Biệt thự",
      "imagePath": "PROJECTS/TouchHome/ExC_01.1.png"
    },
    {
      "id": "4ebdd4a8-09a7-4522-b641-cb2f108741f9",
      "href": "Lavender.html",
      "title": "Lavender Restaurant",
      "slogan": "Giá trị chuyển biến",
      "category": "Nhà hàng",
      "imagePath": "PROJECTS/Lavender/C8.jpg"
    },
    {
      "id": "78e1bdfc-f640-4742-b018-cd2cd0eabd4c",
      "href": "Heal_Hill.html",
      "title": "Heal Hill",
      "slogan": "Góc thiền",
      "category": "Nhà ở nghỉ dưỡng - Bungalow",
      "imagePath": "PROJECTS/TN_Cottage/TN_Bal_02.jpg"
    },
    {
      "id": "92836a8f-ea34-494d-bb11-8f5660c621f0",
      "href": "ThanVanNhiep.html",
      "title": "ThanVanNhiep Office",
      "slogan": "Riêng tư cởi mở",
      "category": "Văn phòng",
      "imagePath": "PROJECTS/ThanVanNhiep/C8.jpg"
    },
    {
      "id": "35a42f72-c7f2-4fa4-aa7f-248ee3701fe8",
      "href": "Ada.html",
      "title": "Ada Office",
      "slogan": "Đối thoại",
      "category": "Văn phòng",
      "imagePath": "PROJECTS/Ada_Office/Ada_0F_02.2.png"
    }
  ],
  "qnas": [
    {
      "id": "1628574c-c22e-4d64-97f9-981825a632fe",
      "question": "Kiến trúc sư giúp được gì cho bạn ngoài bản vẽ?",
      "answerTitle": "Cần Kiến trúc sư để làm gì?",
      "paragraphs": [
        "Kiến trúc sư sẽ dùng các trải nghiệm để khơi gợi và tinh chỉnh các nhu cầu của bạn một cách hợp lí theo góc nhìn sinh hoạt của ngôi nhà sắp tới.",
        "Giúp bạn có những cái nhìn ĐÚNG - SAI về Quyết định của bản thân và GIỮ VỮNG TINH THẦN về thẩm mỹ trong suốt quá trình thi công."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": "PROJECTS/TouchHome/Void_01.jpg"
    },
    {
      "id": "7958fb7f-3124-4468-8114-b6c670c4af17",
      "question": "Bản vẽ Thiết kế có thực sự quan trọng?",
      "answerTitle": "Vai trò của bản vẽ thiết kế",
      "paragraphs": [
        "Bản vẽ chính là vũ khí bảo vệ bạn, để biết được \"TRỌN GÓI\" là gồm những gì, đừng để toilet mà thiếu thoát nước, hay tủ lạnh mà thiếu ổ cắm.",
        "Đối với DREAMESE STUDIO, bản vẽ là hình thức để bạn xác nhận điều bạn đang làm là đúng và là ngôn ngữ chính xác nhất cho đội thợ thi công."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": "QnA/Q_02.png"
    },
    {
      "id": "b6c01c35-17b4-4b59-8f24-290b311ab127",
      "question": "Kiến trúc sư có giúp tôi tiết kiệm chi phí không?",
      "answerTitle": "Cân đối ngân sách thi công",
      "paragraphs": [
        "Trên cùng một Quy mô của công trình, Kiến trúc sư không giúp bạn xây nhà rẻ hơn.\n                        Tuy nhiên, chúng tôi hoàn toàn có thể cân đối và giúp tinh giản những thứ không cần thiết.",
        "Bằng cách khai thác thói quen sinh hoạt, chúng tôi giúp ngôi nhà thông thoáng và tối ưu chi phí đầu tư hiệu quả nhất.",
        "Bên cạnh đó, chúng tôi cũng sẵn sàng khuyên Quý Khách hàng có thể tạm dừng kế hoạch thi công nếu tình hình vật tư biến động\n                        hoặc nhu cầu của khách hàng đang vượt quá ngân sách đang có."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": "QnA/Q_03.png"
    },
    {
      "id": "e79c7782-6145-44a8-8192-280edf51c54d",
      "question": "Có phát sinh chi phí trong quá trình thi công không?",
      "answerTitle": "Phát sinh thi công",
      "paragraphs": [
        "CHÚNG TÔI CAM KẾT KHI THI CÔNG THEO ĐÚNG NHƯ BẢN VẼ THIẾT KẾ, CÔNG TRÌNH SẼ KHÔNG PHÁT SINH.",
        "Sau khi thiết kế xong, bản dự toán chi tiết sẽ liệt kê đầy đủ các hạng mục và khối lượng cần thiết để thi công công trình.\n                        Do đó, ngay cả khi khách hàng không đồng hành cùng Dreamese hay MT Cons thì cũng đều có thể dễ dàng thi công theo đúng bản vẽ và dự toán đã có."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "c0208e25-5fc7-4a28-b5df-3cf8d54a7f7e",
      "question": "Thiết kế có ảnh hưởng đến giá trị ngôi nhà như thế nào?",
      "answerTitle": "Giá trị của thiết kế",
      "paragraphs": [
        "Khi tìm đến Kiến trúc sư, thông thường có 3 lí do để Khách hàng tìm đến:",
        "1 là Khách hàng muốn có ngôi nhà đẹp và ngân sách chính xác trước khi thi công;",
        "2 là muốn có không gian sống lý tưởng;",
        "3 là muốn biết ngân sách thi công của mình có đảm bảo với nhu cầu hay không.",
        "Do đó, 1 bản thiết kế không phải chỉ đẹp trên hình thức 3D mà bản vẽ kỹ thuật thi công đi kèm cũng cần được tỉ mẫn, đúng kỹ thuật và thể hiện được sự chuyên nghiệp.",
        "Ở Dreamese, chúng tôi hiểu rõ những kỳ vọng mà mọi khách hàng mang theo khi tìm đến, vì vậy bên cạnh làm khách hàng thấy dễ hiểu với những hình ảnh 3D lung linh,\n                        chúng tôi cũng quan tâm với việc giải thích các yếu tố kỹ thuật và quy trình thực hiện.",
        "Điều này sẽ giúp ngôi nhà của bạn giữ được giá trị lâu dài và tránh được những rủi ro không đáng có trong quá trình thi công."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "a209decc-bb26-481a-ae16-3b2476f4c836",
      "question": "Tôi nên chọn Kiến trúc sư hay Nhà thiết kế như thế nào?",
      "answerTitle": "Lựa chọn Kiến trúc sư phù hợp",
      "paragraphs": [
        "Với kinh nghiệm hơn 10 năm hoạt động trong lĩnh vực này kể cả ở trong và ngoài nước, chúng tôi hiểu rõ sự tầm quan trọng của việc lựa chọn một Kiến trúc sư phù hợp.",
        "Bất kỳ ai cũng có thể nói về năng lực bản thân, về quy mô doanh nghiệp, về quy trình, ... Tuy nhiên, cốt lõi là sự phù hợp khi giao tiếp và giá trị thực\n                        mà Kiến trúc sư mang lại có đáp ứng được kỳ vọng của khách hàng hay không.",
        "Dreamese chúng tôi tuy là một đơn vị nhỏ, nhưng chúng tôi luôn cố gắng hết mình để mang đến cho khách hàng những giá trị thiết thực nhất,\n                        và cũng sẵn sàng từ chối hoặc giới thiệu studio khác nếu bản thân không thể đáp ứng phù hợp."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "33a60251-5590-44cb-8954-2121bf02d297",
      "question": "Dreamese có hỗ trợ tư vấn thiết kế miễn phí không?",
      "answerTitle": "Chi phí thiết kế",
      "paragraphs": [
        "Chi phí thiết kế tại Dreamese phụ thuộc vào quy mô và yêu cầu cụ thể của từng công trình.\n                        Chúng tôi cung cấp các gói thiết kế linh hoạt để phù hợp với ngân sách của khách hàng.",
        "Ở Dreamese chúng tôi trao đi những giá trị với giá cả phù hợp và không miễn phí thiết kế. Tuy nhiên, khi đồng hành đồng bộ từ thiết kế tới thi công,\n                        Khách hàng sẽ được hỗ trợ giảm trừ thiết kế trong tổng chi phí thi công.",
        "Chúng tôi vẫn khuyến khích khách hàng nên đầu tư vào giá trị thiết kế để có được một không gian sống hoàn hảo và bền vững,\n                        đồng thời khẳng định được đẳng cấp giá trị Cá nhân hóa."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "db8710f9-8d32-4e80-9191-edac83fbc991",
      "question": "Những vật liệu thi công mới nếu không có tác dụng quá lớn để thay thế vật liệu cũ thì giá trị của nó là gì?",
      "answerTitle": "Vật liệu mới",
      "paragraphs": [
        "Mặc dù sự phát tiển của vật liệu thi công mới khá nổi bậc, tuy nhiên sự ứng dụng vào thực tiễn vẫn còn nhiều sự hạn chế.\n                        Điều này bắt nguồn từ sự thiếu hiểu biết về độ bền vật liệu, tính liên kết, và đặc biệt ảnh hưởng tới chi phí bảo hành.",
        "Do đó, việc chọn lựa 1 đơn vị tư vấn uy tín là rất quan trọng để đảm bảo chất lượng và hiệu quả trong quá trình thi công."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "c4d23585-716c-48d4-844e-7b08777d451b",
      "question": "Trước khi thiết kế cần cung cấp những thông tin gì?",
      "answerTitle": "Cân đối ngân sách thi công",
      "paragraphs": [
        "Trên cùng một Quy mô của công trình, Kiến trúc sư không giúp bạn xây nhà rẻ hơn. Tuy nhiên, chúng tôi hoàn toàn có thể cân đối và giúp tinh giản những thứ không cần thiết.",
        "Bằng cách khai thác thói quen sinh hoạt, chúng tôi giúp ngôi nhà thông thoáng và tối ưu chi phí đầu tư hiệu quả nhất."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "79e5c6cb-2a64-4dba-b8b7-2b3b507e8dd6",
      "question": "Thời gian thực hiện dự án là bao lâu?",
      "answerTitle": "Thời gian thực hiện dự án",
      "paragraphs": [
        "Thông thường, thời gian thực hiện dự án tại Dreamese Studio là từ 3 đến 6 tháng, tùy vào quy mô và độ phức tạp của công trình.",
        "Bằng cách khai thác câu chuyện tổng thể của công trình và điều mà khách hàng mong muốn định hướng, chúng tôi sẽ có Quy trình triển khai công việc\n                        phù hợp để đáp ứng nhu cầu của Dự án.",
        "Ở Dreamese, mỗi công trình luôn mang theo 1 câu chuyện tâm huyết, do đó, chính sách là nếu không thể đáp ứng được nhu cầu cũng như kỳ vọng của khách hàng,\n                        chúng tôi sẽ không nhận dự án và hoàn tiền lại cho Khách hàng."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "63a861f3-5785-4e9f-a24e-77ee06d34c8b",
      "question": "Dreamese Studio phù hợp với những khách hàng và phong cách thiết kế nào?",
      "answerTitle": "Phong cách thiết kế của Dreamese Studio",
      "paragraphs": [
        "Ở Dreamese Studio, chúng tôi thuần về các phong cách thiết kế Hiện đại, Tối giản và sang trọng; song vẫn có những ngoại lệ khi câu chuyện nhu cầu và\n                        mong muốn của Khách hàng phù hợp với trí tưởng tưởng tượng của Kiến trúc sư, chúng tôi vẫn sẽ có đội ngũ thực hiện những thiết kế đặc biệt cho Signature.",
        "Có vẻ, những phong cách thiết kế của Dreamese là không bị giới hạn, và như thế, chúng tôi thích lắng nghe câu chuyện của khách hàng,\n                        và viết nó lại bằng thiết kế, bằng công trình hiện hữu."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "bb1b5d25-079f-4258-b971-1b657e26a031",
      "question": "Studio có nhận thiết kế và thi công trọn gói không?",
      "answerTitle": "DỊCH VỤ TỪ DREAMESE",
      "paragraphs": [
        "Tùy vào câu chuyện cũng như nhu cầu của khách hàng, chúng tôi hân hạnh có những dịch vụ phù hợp với từng nhu cầu."
      ],
      "secondaryLabel": "Dịch vụ và Quy trình làm việc của Dreamese Studio →",
      "secondaryHref": "#services",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": ""
    },
    {
      "id": "427858be-0618-4b01-a8c6-177295199f3f",
      "question": "DreameseStudio có nhận dự án ở tỉnh / ngoài khu vực không?",
      "answerTitle": "Phạm vi hoạt động của Dreamese Studio",
      "paragraphs": [
        "Dreamese Studio là 1 đơn vị chuyên cung cấp hoạt động thiết kế Kiến trúc - Nội thất chuyên nghiệp, vì vậy, ở đâu có câu chuyện,\n                        có nhu cầu, chúng tôi đều có thể đáp ứng, **ĐẢM BẢO QUY TRÌNH** được thực hiện đầy đủ",
        "Tuy nhiên, đối với công tác thi công MT Construction sẽ tùy thuộc vào Vị trí địa lí, Quy mô công trình, mà chúng tôi sẽ có giải pháp cung cấp dịch vụ phù hợp."
      ],
      "secondaryLabel": "",
      "secondaryHref": "",
      "ctaLabel": "Trao đổi cùng KTS →",
      "ctaHref": "#contact",
      "imagePath": "PROJECTS/Lean_Villa/ExC_05.1.png"
    }
  ],
  "services": [
    {
      "id": "a57c2b96-ddc0-4aa8-b01b-eeddafce9a5f",
      "href": "Qtr_TKTC.html",
      "title": "Thiết kế -\nThi công trọn gói",
      "description": "Đồng bộ từ thẩm mỹ thiết kế, kỹ thuật thi công và\n                chịu trách nhiệm trên toàn bộ ngân sách xây dựng.",
      "linkLabel": "Quy trình triển khai →"
    },
    {
      "id": "24e9ed9d-343f-42ff-9976-98d71224cb50",
      "href": "Qtr_QLDA.html",
      "title": "Thiết kế -\nQuản lí Dự án",
      "description": "Đảm bảo và Kiểm soát tính nhất quán từ\n                Bản vẽ Thiết kế - Kỹ thuật đến công tác Triển khai thi công.",
      "linkLabel": "Quy trình triển khai →"
    },
    {
      "id": "18fb34a7-7ab6-4e7d-8596-857104870e09",
      "href": "Qtr_TKKT.html",
      "title": "Thiết kế Kiến trúc",
      "description": "Tối ưu không gian sử dụng, thẩm mỹ hình khối xây dựng\n                và xây dựng bản sắc riêng cho câu chuyện của công trình.",
      "linkLabel": "Quy trình triển khai →"
    },
    {
      "id": "92d7e287-0bf8-4551-9491-3f1c8f01d232",
      "href": "Qtr_TKNT.html",
      "title": "Thiết kế Nội thất",
      "description": "Đồng bộ vật liệu và chi phí tối ưu với chất lượng\n                phù hợp nhất hướng đến xây dựng lối sống cá nhân hóa.",
      "linkLabel": "Quy trình triển khai →"
    }
  ],
  "contact": {
    "tagline": "DREAMESE STUDIO – Đồng hành kiến tạo không gian sống.",
    "rows": [
      {
        "id": "08da0069-cab7-42dd-9b7d-f86ed9e020a2",
        "label": "Hotline:",
        "content": "09 4363 4758 - (KTS. Vương)\n0903 888 200 - (KS. Toàn)"
      },
      {
        "id": "4cb7ff04-a7e0-428f-a673-80071cda1348",
        "label": "Địa chỉ:",
        "content": "Cơ sở 1: Trần Văn Thời - Cà Mau\nCơ sở 2: 11/8/32 ĐHT 17, KP2, P.Đông Hưng Thuận, Tp.HCM"
      },
      {
        "id": "8ebe5442-86dc-4010-897b-136909ab4478",
        "label": "Email:",
        "content": "vtv.arc@gmail.com"
      }
    ]
  },
  "footer": {
    "copyright": "© 2025 DREAMESE STUDIO – Architecture & Interior Design",
    "email": "vtv.arc@gmail.com",
    "phone": "09 4363 4758"
  },
  "projectLayout": {
    "height": 450,
    "gap": 24,
    "rounded": true,
    "radius": 4
  },
  "heroLayout": {
    "desktopHeight": 100,
    "mobileHeight": 100
  },
  "heroTypography": {
    "titleDesktop": 64,
    "bodyDesktop": 16,
    "titleMobile": 34,
    "bodyMobile": 16,
    "noteDesktop": 12,
    "noteMobile": 12
  },
  "heroVertical": {
    "desktopAlign": "center",
    "mobileAlign": "center",
    "desktopPaddingTop": 120,
    "desktopPaddingBottom": 120,
    "mobilePaddingTop": 100,
    "mobilePaddingBottom": 100
  }
}
;
    const STORAGE_KEY = "dreamese-home-manager-current-v1";
    const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif)$/i;
    let state = normalizeState(DEFAULT_STATE);
    let previewTimer = null;
    let dragged = null;
    const previewUrls = new Map();
    const el = {};

    document.addEventListener("DOMContentLoaded", init, { once: true });

    function init() {
        ["importHomeInput","websiteFolderInput","importHomeBtn","websiteFolderBtn","newHomeBtn","saveHomeBtn","homeFileName","pageTitle","cssPath","jsPath","logoPath","partnerMt","partnerTitan","projectsSectionTitle","qnaSectionTitle","servicesSectionTitle","contactSectionTitle","footerCopyright","footerEmail","footerPhone","desktopTitle","desktopParagraphs","mobileTitle","mobileParagraph","heroNote","heroDesktopHeight","heroDesktopHeightValue","heroMobileHeight","heroMobileHeightValue","heroHeightSummary","resetHeroHeightBtn","heroDesktopAlign","heroMobileAlign","heroDesktopPaddingTop","heroDesktopPaddingTopValue","heroDesktopPaddingBottom","heroDesktopPaddingBottomValue","heroMobilePaddingTop","heroMobilePaddingTopValue","heroMobilePaddingBottom","heroMobilePaddingBottomValue","heroVerticalSummary","heroTitleDesktopSize","heroTitleDesktopSizeValue","heroBodyDesktopSize","heroBodyDesktopSizeValue","heroTitleMobileSize","heroTitleMobileSizeValue","heroBodyMobileSize","heroBodyMobileSizeValue","heroNoteDesktopSize","heroNoteDesktopSizeValue","heroNoteMobileSize","heroNoteMobileSizeValue","heroTypeSummary","resetHeroTypeBtn","addBackgroundBtn","preloadBackgroundSelect","backgroundList","projectJsonInput","importProjectJsonBtn","addProjectBtn","projectCardHeight","projectCardHeightValue","projectCardGap","projectCardGapValue","projectRounded","projectCardRadius","projectCardRadiusValue","projectRadiusField","projectLayoutSummary","resetProjectLayoutBtn","projectsList","addQnaBtn","qnaList","addServiceBtn","servicesList","contactTagline","addContactRowBtn","contactRowsList","downloadHtmlBtn","downloadStateBtn","importStateBtn","importStateInput","downloadZipBtn","writeWebsiteBtn","validationBox","previewFrame","previewFrameShell","refreshPreviewBtn","statusBar"].forEach(id => el[id] = document.getElementById(id));
        bindTabs(); bindGeneral(); bindHero(); bindHeroLayout(); bindHeroVertical(); bindHeroTypography(); bindProjectLayout(); bindLists(); bindExport(); bindPreview();
        restore(); renderAll();
    }

    function bindTabs() {
        document.querySelectorAll(".sidebar-tab").forEach(btn => btn.addEventListener("click", () => {
            document.querySelectorAll(".sidebar-tab").forEach(x => x.classList.toggle("active", x === btn));
            document.querySelectorAll(".tab-panel").forEach(x => x.classList.toggle("active", x.dataset.panel === btn.dataset.tab));
            if (btn.dataset.tab === "export") renderValidation();
        }));
    }

    function bindGeneral() {
        const binds = {
            homeFileName:["settings","fileName"], pageTitle:["settings","pageTitle"], cssPath:["settings","cssPath"], jsPath:["settings","jsPath"], logoPath:["settings","logoPath"],
            projectsSectionTitle:["sectionTitles","projects"], qnaSectionTitle:["sectionTitles","qna"], servicesSectionTitle:["sectionTitles","services"], contactSectionTitle:["sectionTitles","contact"],
            footerCopyright:["footer","copyright"], footerEmail:["footer","email"], footerPhone:["footer","phone"]
        };
        Object.entries(binds).forEach(([id,path]) => el[id].addEventListener("input", () => { setPath(state,path,el[id].value); queue(); }));
        [el.partnerMt,el.partnerTitan].forEach(box => box.addEventListener("change", () => {
            state.partners=[el.partnerMt,el.partnerTitan].filter(x=>x.checked).map(x=>x.value); queue();
        }));
        el.importHomeBtn.addEventListener("click",()=>el.importHomeInput.click());
        el.importHomeInput.addEventListener("change",importHome);
        el.websiteFolderBtn.addEventListener("click",()=>el.websiteFolderInput.click());
        el.websiteFolderInput.addEventListener("change",loadWebsiteFolder);
        el.newHomeBtn.addEventListener("click",()=>{
            if(!confirm("Tạo trang chủ mới? Dữ liệu chưa lưu sẽ bị thay thế.")) return;
            clearPreviewUrls(); state=normalizeState(blankState()); renderAll(); status("Đã tạo trang chủ mới.","success");
        });
        el.saveHomeBtn.addEventListener("click",()=>{ persist(); status("Đã lưu trong trình duyệt.","success"); });
    }

    function bindHero() {
        el.desktopTitle.addEventListener("input", () => {
            const title = splitLayoutTitle(el.desktopTitle.value);
            state.hero.desktopTop = title.beforeBreak;
            state.hero.desktopBottom = title.afterBreak;
            queue();
        });

        el.mobileTitle.addEventListener("input", () => {
            const title = splitLayoutTitle(el.mobileTitle.value);
            state.hero.mobileTop = title.beforeBreak;
            state.hero.mobileBottom = title.afterBreak;
            queue();
        });

        const binds = {
            mobileParagraph: "mobileParagraph",
            heroNote: "note"
        };

        Object.entries(binds).forEach(([id, key]) => {
            el[id].addEventListener("input", () => {
                state.hero[key] = el[id].value;
                queue();
            });
        });

        el.desktopParagraphs.addEventListener("input", () => {
            state.hero.desktopParagraphs = paragraphs(el.desktopParagraphs.value);
            queue();
        });

        el.addBackgroundBtn.addEventListener("click", () => {
            state.hero.backgrounds.push({ id: uid(), path: "" });
            renderBackgrounds();
            queue();
        });

        el.preloadBackgroundSelect.addEventListener("change", () => {
            state.hero.preloadPath = el.preloadBackgroundSelect.value;
            queue();
        });
    }

    function bindHeroLayout() {
        const updateHeight = (key, value) => {
            state.heroLayout[key] = clampNumber(
                value,
                25,
                200,
                state.heroLayout[key]
            );

            syncHeroLayoutControls();
            queue();
        };

        el.heroDesktopHeight.addEventListener("input", () => {
            updateHeight("desktopHeight", el.heroDesktopHeight.value);
        });

        el.heroMobileHeight.addEventListener("input", () => {
            updateHeight("mobileHeight", el.heroMobileHeight.value);
        });

        el.resetHeroHeightBtn.addEventListener("click", () => {
            state.heroLayout = {
                desktopHeight: 100,
                mobileHeight: 100
            };

            syncHeroLayoutControls();
            queue();
            status("Đã khôi phục chiều cao Hero về 100vh.", "success");
        });
    }

    function syncHeroLayoutControls() {
        const layout = normalizedHeroLayout(state.heroLayout);

        state.heroLayout = layout;

        el.heroDesktopHeight.value = String(layout.desktopHeight);
        el.heroDesktopHeightValue.textContent =
            `${layout.desktopHeight} vh`;

        el.heroMobileHeight.value = String(layout.mobileHeight);
        el.heroMobileHeightValue.textContent =
            `${layout.mobileHeight} vh`;

        el.heroHeightSummary.textContent =
            `Desktop ${layout.desktopHeight}vh · Mobile ${layout.mobileHeight}vh`;
    }

    function bindHeroVertical() {
        const numberControls = [
            ["heroDesktopPaddingTop", "desktopPaddingTop", 0, 300],
            ["heroDesktopPaddingBottom", "desktopPaddingBottom", 0, 300],
            ["heroMobilePaddingTop", "mobilePaddingTop", 0, 240],
            ["heroMobilePaddingBottom", "mobilePaddingBottom", 0, 240]
        ];

        numberControls.forEach(([elementId, key, minimum, maximum]) => {
            el[elementId].addEventListener("input", () => {
                state.heroVertical[key] = clampNumber(
                    el[elementId].value,
                    minimum,
                    maximum,
                    state.heroVertical[key]
                );

                syncHeroVerticalControls();
                queue();
            });
        });

        el.heroDesktopAlign.addEventListener("change", () => {
            state.heroVertical.desktopAlign = el.heroDesktopAlign.value;
            syncHeroVerticalControls();
            queue();
        });

        el.heroMobileAlign.addEventListener("change", () => {
            state.heroVertical.mobileAlign = el.heroMobileAlign.value;
            syncHeroVerticalControls();
            queue();
        });
    }

    function syncHeroVerticalControls() {
        const vertical = normalizedHeroVertical(state.heroVertical);
        state.heroVertical = vertical;

        el.heroDesktopAlign.value = vertical.desktopAlign;
        el.heroMobileAlign.value = vertical.mobileAlign;

        const values = [
            ["heroDesktopPaddingTop", "heroDesktopPaddingTopValue", vertical.desktopPaddingTop],
            ["heroDesktopPaddingBottom", "heroDesktopPaddingBottomValue", vertical.desktopPaddingBottom],
            ["heroMobilePaddingTop", "heroMobilePaddingTopValue", vertical.mobilePaddingTop],
            ["heroMobilePaddingBottom", "heroMobilePaddingBottomValue", vertical.mobilePaddingBottom]
        ];

        values.forEach(([inputId, outputId, value]) => {
            el[inputId].value = String(value);
            el[outputId].textContent = `${value} px`;
        });

        const labels = {
            start: "căn trên",
            center: "căn giữa",
            end: "căn dưới"
        };

        el.heroVerticalSummary.textContent =
            `Desktop: ${labels[vertical.desktopAlign]} · trên ${vertical.desktopPaddingTop}px · dưới ${vertical.desktopPaddingBottom}px · ` +
            `Mobile: ${labels[vertical.mobileAlign]} · trên ${vertical.mobilePaddingTop}px · dưới ${vertical.mobilePaddingBottom}px`;
    }

    function bindHeroTypography() {
        const controls = [
            ["heroTitleDesktopSize", "titleDesktop", 20, 120],
            ["heroBodyDesktopSize", "bodyDesktop", 10, 36],
            ["heroTitleMobileSize", "titleMobile", 18, 72],
            ["heroBodyMobileSize", "bodyMobile", 10, 28],
            ["heroNoteDesktopSize", "noteDesktop", 8, 24],
            ["heroNoteMobileSize", "noteMobile", 8, 22]
        ];
        controls.forEach(([id, key, min, max]) => {
            el[id].addEventListener("input", () => {
                state.heroTypography[key] = clampNumber(el[id].value, min, max, state.heroTypography[key]);
                syncHeroTypographyControls();
                queue();
            });
        });
        el.resetHeroTypeBtn.addEventListener("click", () => {
            state.heroTypography = { titleDesktop:64, bodyDesktop:16, titleMobile:34, bodyMobile:16, noteDesktop:12, noteMobile:12 };
            syncHeroTypographyControls();
            queue();
            status("Đã khôi phục kích thước chữ Hero mặc định.", "success");
        });
    }

    function syncHeroTypographyControls() {
        const type = normalizedHeroTypography(state.heroTypography);
        state.heroTypography = type;
        const pairs = [
            ["heroTitleDesktopSize", "heroTitleDesktopSizeValue", type.titleDesktop],
            ["heroBodyDesktopSize", "heroBodyDesktopSizeValue", type.bodyDesktop],
            ["heroTitleMobileSize", "heroTitleMobileSizeValue", type.titleMobile],
            ["heroBodyMobileSize", "heroBodyMobileSizeValue", type.bodyMobile],
            ["heroNoteDesktopSize", "heroNoteDesktopSizeValue", type.noteDesktop],
            ["heroNoteMobileSize", "heroNoteMobileSizeValue", type.noteMobile]
        ];
        pairs.forEach(([inputId, outputId, value]) => { el[inputId].value = String(value); el[outputId].textContent = `${value} px`; });
        el.heroTypeSummary.textContent = `Desktop: ${type.titleDesktop} / ${type.bodyDesktop} / ${type.noteDesktop} px · Mobile: ${type.titleMobile} / ${type.bodyMobile} / ${type.noteMobile} px`;
    }

    function bindProjectLayout() {
        const updateNumber = (key, value, minimum, maximum) => {
            state.projectLayout[key] = clampNumber(value, minimum, maximum, state.projectLayout[key]);
            syncProjectLayoutControls();
            queue();
        };
        el.projectCardHeight.addEventListener("input", () => updateNumber("height", el.projectCardHeight.value, 180, 700));
        el.projectCardGap.addEventListener("input", () => updateNumber("gap", el.projectCardGap.value, 0, 60));
        el.projectRounded.addEventListener("change", () => { state.projectLayout.rounded = el.projectRounded.checked; syncProjectLayoutControls(); queue(); });
        el.projectCardRadius.addEventListener("input", () => updateNumber("radius", el.projectCardRadius.value, 1, 40));
        el.resetProjectLayoutBtn.addEventListener("click", () => {
            state.projectLayout = { height:450, gap:24, rounded:true, radius:4 };
            syncProjectLayoutControls(); queue(); status("Đã khôi phục kích thước thẻ dự án mặc định.","success");
        });
    }

    function syncProjectLayoutControls() {
        const layout = normalizedProjectLayout(state.projectLayout);
        state.projectLayout = layout;
        el.projectCardHeight.value = String(layout.height);
        el.projectCardHeightValue.textContent = `${layout.height} px`;
        el.projectCardGap.value = String(layout.gap);
        el.projectCardGapValue.textContent = `${layout.gap} px`;
        el.projectRounded.checked = layout.rounded;
        el.projectCardRadius.value = String(layout.radius);
        el.projectCardRadiusValue.textContent = `${layout.radius} px`;
        el.projectCardRadius.disabled = !layout.rounded;
        el.projectRadiusField.classList.toggle("is-disabled", !layout.rounded);
        el.projectLayoutSummary.textContent = layout.rounded
            ? `Cao ${layout.height} px · Hở ${layout.gap} px · Bo góc ${layout.radius} px`
            : `Cao ${layout.height} px · Hở ${layout.gap} px · Không bo góc`;
    }

    function bindLists() {
        el.addProjectBtn.addEventListener("click",()=>{state.projects.push(blankProject());renderProjects();queue();});
        el.addQnaBtn.addEventListener("click",()=>{state.qnas.push(blankQna());renderQna();queue();});
        el.addServiceBtn.addEventListener("click",()=>{state.services.push(blankService());renderServices();queue();});
        el.addContactRowBtn.addEventListener("click",()=>{state.contact.rows.push(blankContact());renderContact();queue();});
        el.contactTagline.addEventListener("input",()=>{state.contact.tagline=el.contactTagline.value;queue();});
        el.importProjectJsonBtn.addEventListener("click",()=>el.projectJsonInput.click());
        el.projectJsonInput.addEventListener("change",importProjectJson);
        [[el.backgroundList,"background"],[el.projectsList,"project"],[el.qnaList,"qna"],[el.servicesList,"service"],[el.contactRowsList,"contact"]].forEach(([container,type])=>{
            container.addEventListener("input",onListInput); container.addEventListener("click",onListClick); bindDrag(container,type);
        });
    }

    function bindExport() {
        el.downloadHtmlBtn.addEventListener("click",()=>download(htmlName(),new Blob([buildHtml()],{type:"text/html;charset=utf-8"})));
        el.downloadStateBtn.addEventListener("click",()=>download(baseName()+".home.json",new Blob([JSON.stringify(serializable(),null,2)],{type:"application/json"})));
        el.importStateBtn.addEventListener("click",()=>el.importStateInput.click());
        el.importStateInput.addEventListener("change",async()=>{
            const f=el.importStateInput.files?.[0]; if(!f)return;
            try{state=normalizeState(JSON.parse(await f.text()));renderAll();status("Đã mở dữ liệu Home Manager.","success");}catch(e){status("File JSON không đúng định dạng.","error");}
            el.importStateInput.value="";
        });
        el.downloadZipBtn.addEventListener("click",exportZip);
        el.writeWebsiteBtn.addEventListener("click",writeWebsite);
    }

    function bindPreview() {
        el.refreshPreviewBtn.addEventListener("click",renderPreview);
        document.querySelectorAll("[data-preview-width]").forEach(btn=>btn.addEventListener("click",()=>{
            document.querySelectorAll("[data-preview-width]").forEach(x=>x.classList.toggle("active",x===btn));
            el.previewFrameShell.classList.toggle("mobile",btn.dataset.previewWidth==="mobile");
            renderPreview();
        }));
    }

    function onListInput(e) {
        const card=e.target.closest(".manager-card"), field=e.target.dataset.field; if(!card||!field)return;
        const item=find(card.dataset.type,card.dataset.id); if(!item)return;
        item[field]=field==="paragraphs"?paragraphs(e.target.value):e.target.value;
        if(card.dataset.type==="background"&&field==="path") renderPreload();
        const title=card.querySelector(".card-title");
        if(title&&["title","question","label","path"].includes(field)) title.textContent=e.target.value||"Chưa đặt tên";
        queue();
    }

    function onListClick(e) {
        const b=e.target.closest("[data-action]"), card=e.target.closest(".manager-card"); if(!b||!card)return;
        const type=card.dataset.type,id=card.dataset.id,a=b.dataset.action;
        if(a==="remove") remove(type,id); else if(a==="up") move(type,id,-1); else if(a==="down") move(type,id,1);
    }

    function bindDrag(container,type) {
        container.addEventListener("dragstart",e=>{const c=e.target.closest(".manager-card");if(!c)return;dragged={type,id:c.dataset.id};c.classList.add("dragging");});
        container.addEventListener("dragend",()=>{dragged=null;container.querySelectorAll(".manager-card").forEach(c=>c.classList.remove("dragging","drag-target"));});
        container.addEventListener("dragover",e=>{const c=e.target.closest(".manager-card");if(!c)return;e.preventDefault();c.classList.add("drag-target");});
        container.addEventListener("dragleave",e=>e.target.closest(".manager-card")?.classList.remove("drag-target"));
        container.addEventListener("drop",e=>{
            const c=e.target.closest(".manager-card");if(!c||!dragged||dragged.type!==type)return;e.preventDefault();
            const list=getList(type),from=list.findIndex(x=>x.id===dragged.id),to=list.findIndex(x=>x.id===c.dataset.id);if(from<0||to<0||from===to)return;
            const [m]=list.splice(from,1);list.splice(to,0,m);renderType(type);queue();
        });
    }

    async function importProjectJson() {
        let count=0;
        for(const f of Array.from(el.projectJsonInput.files||[])){
            try{
                const d=JSON.parse(await f.text()), p=d.project||{}, h=d.homeCard||{}, gallery=Array.isArray(d.gallery)?d.gallery:[];
                const img=gallery.find(x=>x.id===(h.imageId||d.heroImageId))||gallery[0];
                const imagePath=img?.fileName?[safe(d.settings?.assetRoot||"PROJECTS"),safe(p.folder||""),img.fileName].filter(Boolean).join("/"):"";
                const item={id:uid(),href:ensureHtml(p.fileName||"Du_An_Moi.html"),title:h.title||p.name||"Dự án mới",slogan:h.slogan||p.slogan||"",category:h.category||p.type||"",imagePath};
                const i=state.projects.findIndex(x=>norm(x.href).toLowerCase()===norm(item.href).toLowerCase()); if(i>=0)item.id=state.projects[i].id;
                if(i>=0)state.projects[i]=item;else state.projects.push(item);count++;
            }catch(err){console.warn(f.name,err);}
        }
        el.projectJsonInput.value="";renderProjects();queue();status(`Đã đọc ${count} dự án.`,"success");
    }

    async function importHome() {
        const f=el.importHomeInput.files?.[0];if(!f)return;
        try{state=normalizeState(parseHome(await f.text(),f.name));renderAll();status(`Đã đọc ${f.name}.`,"success");}catch(err){console.error(err);status("Không thể đọc cấu trúc file này.","error");}
        el.importHomeInput.value="";
    }

    function parseProjectLayout(documentValue) {
        const body=documentValue.body;
        const styleText=documentValue.querySelector("#dreamese-project-layout")?.textContent||"";
        const read=(name,fallback)=>{const match=styleText.match(new RegExp(`--${name}\\s*:\s*([\d.]+)px`,"i"));return match?Number(match[1]):fallback;};
        const height=Number(body?.dataset.projectHeight)||read("dreamese-project-height",450);
        const gap=Number(body?.dataset.projectGap)||read("dreamese-project-gap",24);
        const cssRadius=read("dreamese-project-radius",4);
        const rounded=body?.dataset.projectRounded?body.dataset.projectRounded==="true":cssRadius>0;
        const radius=Number(body?.dataset.projectRadius)||(cssRadius>0?cssRadius:4);
        return normalizedProjectLayout({height,gap,rounded,radius});
    }

    function parseHeroLayout(documentValue) {
        const body = documentValue.body;
        const styleText = documentValue.querySelector(
            "#dreamese-hero-layout"
        )?.textContent || "";

        const readValue = (variableName, fallback) => {
            const match = styleText.match(
                new RegExp(
                    `--${variableName}\\s*:\\s*([\\d.]+)vh`,
                    "i"
                )
            );

            return match ? Number(match[1]) : fallback;
        };

        return normalizedHeroLayout({
            desktopHeight:
                Number(body?.dataset.heroDesktopHeight)
                || readValue("dreamese-hero-height-desktop", 100),

            mobileHeight:
                Number(body?.dataset.heroMobileHeight)
                || readValue("dreamese-hero-height-mobile", 100)
        });
    }

    function parseHeroTypography(documentValue) {
        const body = documentValue.body;
        const styleText = documentValue.querySelector("#dreamese-hero-typography")?.textContent || "";
        const readPx = (name, fallback) => {
            const match = styleText.match(new RegExp(`--${name}\\s*:\\s*([\\d.]+)px`, "i"));
            return match ? Number(match[1]) : fallback;
        };
        return normalizedHeroTypography({
            titleDesktop:Number(body?.dataset.heroTitleDesktop)||readPx("dreamese-hero-title-desktop",64),
            bodyDesktop:Number(body?.dataset.heroBodyDesktop)||readPx("dreamese-hero-body-desktop",16),
            titleMobile:Number(body?.dataset.heroTitleMobile)||readPx("dreamese-hero-title-mobile",34),
            bodyMobile:Number(body?.dataset.heroBodyMobile)||readPx("dreamese-hero-body-mobile",16),
            noteDesktop:Number(body?.dataset.heroNoteDesktop)||readPx("dreamese-hero-note-desktop",12),
            noteMobile:Number(body?.dataset.heroNoteMobile)||readPx("dreamese-hero-note-mobile",12)
        });
    }

    function parseHeroVertical(documentValue) {
        const body = documentValue.body;
        const styleText = documentValue.querySelector(
            "#dreamese-hero-vertical"
        )?.textContent || "";

        const readPx = (variableName, fallback) => {
            const match = styleText.match(
                new RegExp(
                    `--${variableName}\\s*:\\s*([\\d.]+)px`,
                    "i"
                )
            );

            return match ? Number(match[1]) : fallback;
        };

        const validAlign = (value, fallback) => {
            return ["start", "center", "end"].includes(value)
                ? value
                : fallback;
        };

        return normalizedHeroVertical({
            desktopAlign: validAlign(
                body?.dataset.heroDesktopAlign,
                "center"
            ),
            mobileAlign: validAlign(
                body?.dataset.heroMobileAlign,
                "center"
            ),
            desktopPaddingTop:
                Number(body?.dataset.heroDesktopPaddingTop)
                || readPx("dreamese-hero-padding-top-desktop", 120),
            desktopPaddingBottom:
                Number(body?.dataset.heroDesktopPaddingBottom)
                || readPx("dreamese-hero-padding-bottom-desktop", 120),
            mobilePaddingTop:
                Number(body?.dataset.heroMobilePaddingTop)
                || readPx("dreamese-hero-padding-top-mobile", 100),
            mobilePaddingBottom:
                Number(body?.dataset.heroMobilePaddingBottom)
                || readPx("dreamese-hero-padding-bottom-mobile", 100)
        });
    }

    function parseHome(html,fileName) {
        const d=new DOMParser().parseFromString(html,"text/html"),body=d.body;
        const split=sel=>{const h=d.querySelector(sel);if(!h)return["",""];const c=h.cloneNode(true),s=c.querySelector(".hero-line"),b=s?.textContent.trim()||"";s?.remove();return[c.textContent.trim(),b];};
        const [dt,db]=split(".hero-desktop h1"),[mt,mb]=split(".hero-mobile h1");
        const projects=Array.from(d.querySelectorAll("#projectTrack > a.project")).map(a=>{const c=a.querySelector(".project-content"),sm=Array.from(c?.querySelectorAll(":scope > small")||[]),cc=c?.cloneNode(true);cc?.querySelectorAll("small").forEach(x=>x.remove());return{id:uid(),href:a.getAttribute("href")||"",title:cc?.textContent.trim()||"",slogan:sm[0]?.textContent.trim()||"",category:sm[1]?.textContent.trim()||"",imagePath:a.dataset.bg||""};});
        const qnas=Array.from(d.querySelectorAll(".qna-card")).map(card=>{const c=card.querySelector(".qna-content-data"),ps=[];let sl="",sh="";Array.from(c?.children||[]).forEach(ch=>{if(ch.tagName!=="P")return;const a=ch.querySelector("a");if(a&&a.getAttribute("href")!=="#contact"){sl=a.textContent.trim();sh=a.getAttribute("href")||"";return;}const cp=ch.cloneNode(true);cp.querySelectorAll("strong,b").forEach(x=>x.replaceWith(`**${x.textContent.trim()}**`));ps.push(cp.textContent.trim());});const direct=Array.from(c?.children||[]).find(x=>x.tagName==="A"),img=c?.querySelector("img");return{id:uid(),question:card.querySelector(".qna-card-heading h3")?.textContent.trim()||"",answerTitle:c?.querySelector("h4")?.textContent.trim()||"",paragraphs:ps,secondaryLabel:sl,secondaryHref:sh,ctaLabel:direct?.textContent.trim()||"Trao đổi cùng KTS →",ctaHref:direct?.getAttribute("href")||"#contact",imagePath:img?.dataset.src||img?.getAttribute("src")||""};});
        const services=Array.from(d.querySelectorAll(".services-cards > a.service-box")).map(a=>({id:uid(),href:a.getAttribute("href")||"",title:breakText(a.querySelector("h3")),description:a.querySelector("p")?.textContent.trim()||"",linkLabel:a.querySelector(".service-link")?.textContent.trim()||"Quy trình triển khai →"}));
        const rows=Array.from(d.querySelectorAll("#contact .contact-row")).map(r=>({id:uid(),label:r.querySelector(".contact-label")?.textContent.trim()||"",content:breakText(r.querySelector(".contact-content"))}));
        const bgs=(body?.dataset.bg||"").split(",").map(x=>x.trim()).filter(Boolean).map(path=>({id:uid(),path}));
        return{id:uid(),settings:{fileName:ensureHtml(fileName),pageTitle:d.title||"Dreamese - Kiến trúc & Nội thất",cssPath:d.querySelector('link[rel="stylesheet"]')?.getAttribute("href")||"HOME.css",jsPath:d.querySelector("script[src]")?.getAttribute("src")||"HOME.js",logoPath:d.querySelector("nav .logo img")?.getAttribute("src")||"Dreamese_Studio.png"},partners:(body?.dataset.partners||"").split(",").map(x=>x.trim()).filter(Boolean),sectionTitles:{projects:d.querySelector("#projects > h2")?.textContent.trim()||"Dự án tiêu biểu",qna:d.querySelector("#qna > h2")?.textContent.trim()||"Góc giải đáp",services:d.querySelector("#services > h2")?.textContent.trim()||"Dịch vụ",contact:d.querySelector("#contact > h2")?.textContent.trim()||"Liên hệ"},projectLayout:parseProjectLayout(d),heroLayout:parseHeroLayout(d),heroVertical:parseHeroVertical(d),heroTypography:parseHeroTypography(d),hero:{desktopTop:dt,desktopBottom:db,desktopParagraphs:Array.from(d.querySelectorAll(".hero-desktop > p")).map(x=>x.textContent.trim()),mobileTop:mt,mobileBottom:mb,mobileParagraph:d.querySelector(".hero-mobile > p")?.textContent.trim()||"",note:d.querySelector(".hero-note")?.textContent.trim()||"",backgrounds:bgs,preloadPath:d.querySelector('link[rel="preload"][as="image"]')?.getAttribute("href")||bgs[0]?.path||""},projects,qnas,services,contact:{tagline:d.querySelector("#contact .contact-tagline")?.textContent.trim()||"",rows},footer:{copyright:d.querySelector(".footer-copyright")?.textContent.trim()||d.querySelector(".site-footer .footer-left")?.textContent.trim()||"© DREAMESE STUDIO – Architecture & Interior Design",email:d.querySelector('.footer-contact-fallback a[href^="mailto:"]')?.textContent.trim()||"vtv.arc@gmail.com",phone:d.querySelector('.footer-contact-fallback a[href^="tel:"]')?.textContent.trim()||"09 4363 4758"}};
    }

    function breakText(node){if(!node)return"";const c=node.cloneNode(true);c.querySelectorAll("br").forEach(x=>x.replaceWith("\n"));return c.textContent.trim();}

    function loadWebsiteFolder() {
        clearPreviewUrls(); const files=Array.from(el.websiteFolderInput.files||[]).filter(f=>IMAGE_RE.test(f.name)); let count=0;
        for(const a of assets()){
            const wanted=norm(a.path).toLowerCase();if(!wanted)continue;
            const matches=files.filter(f=>{const r=norm(f.webkitRelativePath||f.name).toLowerCase();return r===wanted||r.endsWith("/"+wanted)||f.name.toLowerCase()===wanted.split("/").at(-1);});
            if(matches.length===1){previewUrls.set(a.path,URL.createObjectURL(matches[0]));count++;}
        }
        el.websiteFolderInput.value="";renderAllLists();renderPreview();status(`Đã ghép ${count} hình từ website.`,"success");
    }

    function renderAll(){sync();renderAllLists();renderValidation();renderPreview();persist();}
    function sync(){
        const vals={homeFileName:state.settings.fileName,pageTitle:state.settings.pageTitle,cssPath:state.settings.cssPath,jsPath:state.settings.jsPath,logoPath:state.settings.logoPath,projectsSectionTitle:state.sectionTitles.projects,qnaSectionTitle:state.sectionTitles.qna,servicesSectionTitle:state.sectionTitles.services,contactSectionTitle:state.sectionTitles.contact,footerCopyright:state.footer.copyright,footerEmail:state.footer.email,footerPhone:state.footer.phone,desktopTitle:[state.hero.desktopTop,state.hero.desktopBottom].filter(Boolean).join("\n"),desktopParagraphs:state.hero.desktopParagraphs.join("\n\n"),mobileTitle:[state.hero.mobileTop,state.hero.mobileBottom].filter(Boolean).join("\n"),mobileParagraph:state.hero.mobileParagraph,heroNote:state.hero.note,contactTagline:state.contact.tagline};
        Object.entries(vals).forEach(([id,v])=>el[id].value=v??"");el.partnerMt.checked=state.partners.includes("mt");el.partnerTitan.checked=state.partners.includes("titan");
        syncHeroLayoutControls();
        syncHeroVerticalControls();
        syncHeroTypographyControls();
        syncProjectLayoutControls();
    }
    function renderAllLists(){renderBackgrounds();renderProjects();renderQna();renderServices();renderContact();}
    function renderBackgrounds(){el.backgroundList.innerHTML=state.hero.backgrounds.map((x,i)=>card("background",x.id,i,x.path||"Hình nền mới",preview(x.path),`<label class="compact-field"><span>Đường dẫn hình</span><input data-field="path" value="${ea(x.path)}"></label>`)).join("");renderPreload();}
    function renderPreload(){el.preloadBackgroundSelect.innerHTML=state.hero.backgrounds.length?state.hero.backgrounds.map((x,i)=>`<option value="${ea(x.path)}">${String(i+1).padStart(2,"0")} — ${eh(x.path||"Chưa có đường dẫn")}</option>`).join(""):'<option value="">Chưa có hình nền</option>';if(!state.hero.backgrounds.some(x=>x.path===state.hero.preloadPath))state.hero.preloadPath=state.hero.backgrounds[0]?.path||"";el.preloadBackgroundSelect.value=state.hero.preloadPath;}
    function renderProjects(){el.projectsList.innerHTML=state.projects.map((x,i)=>card("project",x.id,i,x.title||"Dự án mới",preview(x.imagePath),`<div class="inline-grid"><label class="compact-field"><span>Tên dự án</span><input data-field="title" value="${ea(x.title)}"></label><label class="compact-field"><span>File trang dự án</span><input data-field="href" value="${ea(x.href)}"></label></div><div class="inline-grid"><label class="compact-field"><span>Slogan</span><input data-field="slogan" value="${ea(x.slogan)}"></label><label class="compact-field"><span>Loại hình</span><input data-field="category" value="${ea(x.category)}"></label></div><label class="compact-field"><span>Đường dẫn ảnh đại diện</span><input data-field="imagePath" value="${ea(x.imagePath)}"></label>`)).join("");}
    function renderQna(){el.qnaList.innerHTML=state.qnas.map((x,i)=>card("qna",x.id,i,x.question||"Câu hỏi mới",x.imagePath?preview(x.imagePath):"",`<label class="compact-field"><span>Câu hỏi</span><textarea data-field="question" rows="2">${eh(x.question)}</textarea></label><label class="compact-field"><span>Tiêu đề câu trả lời</span><input data-field="answerTitle" value="${ea(x.answerTitle)}"></label><label class="compact-field"><span>Nội dung trả lời</span><textarea data-field="paragraphs" rows="8">${eh(x.paragraphs.join("\n\n"))}</textarea></label><div class="inline-grid"><label class="compact-field"><span>Liên kết phụ — nội dung</span><input data-field="secondaryLabel" value="${ea(x.secondaryLabel)}"></label><label class="compact-field"><span>Liên kết phụ — href</span><input data-field="secondaryHref" value="${ea(x.secondaryHref)}"></label></div><div class="inline-grid"><label class="compact-field"><span>Nút cuối — nội dung</span><input data-field="ctaLabel" value="${ea(x.ctaLabel)}"></label><label class="compact-field"><span>Nút cuối — href</span><input data-field="ctaHref" value="${ea(x.ctaHref)}"></label></div><label class="compact-field"><span>Ảnh minh họa</span><input data-field="imagePath" value="${ea(x.imagePath)}"></label>`)).join("");}
    function renderServices(){el.servicesList.innerHTML=state.services.map((x,i)=>card("service",x.id,i,x.title||"Dịch vụ mới","",`<div class="inline-grid"><label class="compact-field"><span>Tên dịch vụ</span><textarea data-field="title" rows="3">${eh(x.title)}</textarea></label><label class="compact-field"><span>File quy trình</span><input data-field="href" value="${ea(x.href)}"></label></div><label class="compact-field"><span>Mô tả</span><textarea data-field="description" rows="5">${eh(x.description)}</textarea></label><label class="compact-field"><span>Dòng liên kết</span><input data-field="linkLabel" value="${ea(x.linkLabel)}"></label>`)).join("");}
    function renderContact(){el.contactRowsList.innerHTML=state.contact.rows.map((x,i)=>card("contact",x.id,i,x.label||"Dòng liên hệ","",`<div class="inline-grid"><label class="compact-field"><span>Nhãn</span><input data-field="label" value="${ea(x.label)}"></label><label class="compact-field"><span>Nội dung — xuống dòng sẽ thành &lt;br&gt;</span><textarea data-field="content" rows="4">${eh(x.content)}</textarea></label></div>`)).join("");}
    function preview(path){return `<img class="asset-preview" src="${ea(previewUrls.get(path)||placeholder(path))}" alt="${ea(path)}">`;}
    function card(type,id,i,title,prev,fields){return `<article class="manager-card" data-type="${type}" data-id="${ea(id)}" draggable="true"><div class="card-header"><div class="card-identity"><span class="card-number">${String(i+1).padStart(2,"0")}</span><strong class="card-title">${eh(title)}</strong></div><div class="card-actions"><button class="icon-button" data-action="up">↑</button><button class="icon-button" data-action="down">↓</button><button class="mini-button" data-action="remove">Xóa</button></div></div><div class="card-body ${prev?"":"no-preview"}">${prev}<div class="card-fields">${fields}</div></div></article>`;}

    function getList(type){return type==="background"?state.hero.backgrounds:type==="project"?state.projects:type==="qna"?state.qnas:type==="service"?state.services:state.contact.rows;}
    function find(type,id){return getList(type).find(x=>x.id===id);}
    function renderType(type){if(type==="background")renderBackgrounds();else if(type==="project")renderProjects();else if(type==="qna")renderQna();else if(type==="service")renderServices();else renderContact();}
    function remove(type,id){const l=getList(type),i=l.findIndex(x=>x.id===id);if(i<0)return;const [r]=l.splice(i,1);if(type==="background"&&state.hero.preloadPath===r.path)state.hero.preloadPath=l[0]?.path||"";renderType(type);queue();}
    function move(type,id,off){const l=getList(type),i=l.findIndex(x=>x.id===id),j=i+off;if(i<0||j<0||j>=l.length)return;const [x]=l.splice(i,1);l.splice(j,0,x);renderType(type);queue();}

    function buildHtml(){
        const bgs=state.hero.backgrounds.map(x=>x.path.trim()).filter(Boolean), preload=state.hero.preloadPath||bgs[0]||"", partners=state.partners.join(",");
        const projectLayout=normalizedProjectLayout(state.projectLayout);
        const projectRadius=projectLayout.rounded?projectLayout.radius:0;
        const heroLayout=normalizedHeroLayout(state.heroLayout);
        const heroVertical=normalizedHeroVertical(state.heroVertical);
        const heroTypography=normalizedHeroTypography(state.heroTypography);
        const projectLayoutCss=`<style id="dreamese-project-layout">
        :root {
            --dreamese-project-height: ${projectLayout.height}px;
            --dreamese-project-gap: ${projectLayout.gap}px;
            --dreamese-project-radius: ${projectRadius}px;
        }
        .project-track { gap: var(--dreamese-project-gap); }
        .project { height: var(--dreamese-project-height); border-radius: var(--dreamese-project-radius); }
    </style>`;

        const heroLayoutCss=`<style id="dreamese-hero-layout">
        :root {
            --dreamese-hero-height-desktop: ${heroLayout.desktopHeight}vh;
            --dreamese-hero-height-mobile: ${heroLayout.mobileHeight}vh;
        }

        #home {
            min-height: var(--dreamese-hero-height-desktop);
        }

        @media (max-width: 900px) {
            #home {
                min-height: var(--dreamese-hero-height-mobile);
            }
        }
    </style>`;

        const heroVerticalCss=`<style id="dreamese-hero-vertical">
        :root {
            --dreamese-hero-padding-top-desktop: ${heroVertical.desktopPaddingTop}px;
            --dreamese-hero-padding-bottom-desktop: ${heroVertical.desktopPaddingBottom}px;
            --dreamese-hero-padding-top-mobile: ${heroVertical.mobilePaddingTop}px;
            --dreamese-hero-padding-bottom-mobile: ${heroVertical.mobilePaddingBottom}px;
        }

        #home {
            box-sizing: border-box;
            align-items: ${heroAlignToCss(heroVertical.desktopAlign)};
            padding-top: var(--dreamese-hero-padding-top-desktop);
            padding-bottom: var(--dreamese-hero-padding-bottom-desktop);
        }

        @media (max-width: 900px) {
            #home {
                align-items: ${heroAlignToCss(heroVertical.mobileAlign)};
                padding-top: var(--dreamese-hero-padding-top-mobile);
                padding-bottom: var(--dreamese-hero-padding-bottom-mobile);
            }
        }
    </style>`;

        const heroTypographyCss=`<style id="dreamese-hero-typography">
        :root {
            --dreamese-hero-title-desktop: ${heroTypography.titleDesktop}px;
            --dreamese-hero-body-desktop: ${heroTypography.bodyDesktop}px;
            --dreamese-hero-title-mobile: ${heroTypography.titleMobile}px;
            --dreamese-hero-body-mobile: ${heroTypography.bodyMobile}px;
            --dreamese-hero-note-desktop: ${heroTypography.noteDesktop}px;
            --dreamese-hero-note-mobile: ${heroTypography.noteMobile}px;
        }
        .hero-desktop h1 { font-size:var(--dreamese-hero-title-desktop); }
        .hero-desktop > p { font-size:var(--dreamese-hero-body-desktop); }
        .hero-note { font-size:var(--dreamese-hero-note-desktop); }
        @media (max-width:900px) {
            .hero-mobile h1 { font-size:var(--dreamese-hero-title-mobile); }
            .hero-mobile > p { font-size:var(--dreamese-hero-body-mobile); }
            .hero-note { font-size:var(--dreamese-hero-note-mobile); }
        }
    </style>`;

        const bgAttr=bgs.length?`\n    data-bg="\n        ${bgs.map(ea).join(",\n        ")}"`:"";
        const projects=state.projects.map(x=>`            <a href="${ea(x.href)}" class="project" data-bg="${ea(x.imagePath)}">\n                <span class="project-content">\n                    ${eh(x.title)}<br>\n                    <small>${eh(x.slogan)}</small>\n                    <small class="project-meta">${eh(x.category)}</small>\n                </span>\n            </a>`).join("\n\n");
        const qnas=state.qnas.map((x,i)=>{const ps=x.paragraphs.map(p=>`                    <p>${light(p)}</p>`).join("\n"),sec=x.secondaryLabel&&x.secondaryHref?`\n                    <p><a href="${ea(x.secondaryHref)}" class="qna-cta-link">${eh(x.secondaryLabel)}</a></p>`:"",cta=x.ctaLabel&&x.ctaHref?`\n                    <a href="${ea(x.ctaHref)}" class="qna-cta-link">${eh(x.ctaLabel)}</a>`:"",img=x.imagePath?`\n                    <img data-src="${ea(x.imagePath)}" class="qna-content-image" alt="Hình minh họa nội dung giải đáp" loading="lazy" decoding="async">`:"";return `            <!-- Câu hỏi ${i+1} -->\n            <div class="qna-card">\n                <div class="qna-card-heading">\n                    <span class="qna-num">${String(i+1).padStart(2,"0")}</span>\n                    <h3>${eh(x.question)}</h3>\n                </div>\n                <div class="qna-content-data">\n                    <h4>${eh(x.answerTitle)}</h4>\n${ps}${sec}${cta}${img}\n                </div>\n            </div>`;}).join("\n\n");
        const services=state.services.map(x=>`        <a href="${ea(x.href)}" class="service-box">\n            <h3>${lines(x.title)}</h3>\n            <p>${eh(x.description)}</p>\n            <span class="service-link">${eh(x.linkLabel)}</span>\n        </a>`).join("\n\n");
        const rows=state.contact.rows.map(x=>`    <div class="contact-row">\n        <div class="contact-label">${eh(x.label)}</div>\n        <div class="contact-content">${lines(x.content)}</div>\n    </div>`).join("\n\n");
        return `<!DOCTYPE html>\n<html lang="vi">\n<head>\n    <meta charset="UTF-8">\n    <title>${eh(state.settings.pageTitle)}</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    ${preload?`<link rel="preload" as="image" href="${ea(preload)}" fetchpriority="high">`:""}\n    <link rel="stylesheet" href="${ea(state.settings.cssPath)}">\n    ${projectLayoutCss}\n    ${heroLayoutCss}\n    ${heroVerticalCss}\n    ${heroTypographyCss}\n    <script src="${ea(state.settings.jsPath)}" defer></script>\n</head>\n<body\n    data-partners="${ea(partners)}"\n    data-project-height="${projectLayout.height}"\n    data-project-gap="${projectLayout.gap}"\n    data-project-rounded="${projectLayout.rounded}"\n    data-project-radius="${projectLayout.radius}"\n    data-hero-desktop-height="${heroLayout.desktopHeight}"\n    data-hero-mobile-height="${heroLayout.mobileHeight}"\n    data-hero-desktop-align="${heroVertical.desktopAlign}"\n    data-hero-mobile-align="${heroVertical.mobileAlign}"\n    data-hero-desktop-padding-top="${heroVertical.desktopPaddingTop}"\n    data-hero-desktop-padding-bottom="${heroVertical.desktopPaddingBottom}"\n    data-hero-mobile-padding-top="${heroVertical.mobilePaddingTop}"\n    data-hero-mobile-padding-bottom="${heroVertical.mobilePaddingBottom}"\n    data-hero-title-desktop="${heroTypography.titleDesktop}"\n    data-hero-body-desktop="${heroTypography.bodyDesktop}"\n    data-hero-title-mobile="${heroTypography.titleMobile}"\n    data-hero-body-mobile="${heroTypography.bodyMobile}"\n    data-hero-note-desktop="${heroTypography.noteDesktop}"\n    data-hero-note-mobile="${heroTypography.noteMobile}"${bgAttr}>\n<nav>\n    <div class="logo"><img src="${ea(state.settings.logoPath)}" alt="DREAMESE STUDIO" decoding="async" fetchpriority="high"><span class="logo-text">DREAMESE STUDIO</span></div>\n    <ul><li><a href="#home">Về chúng tôi</a></li><li><a href="#projects">Dự án</a></li><li><a href="#qna">Góc giải đáp</a></li><li><a href="#services">Dịch vụ</a></li><li><a href="#contact">Liên hệ</a></li></ul>\n</nav>\n<section id="home"><div>\n    <div class="hero-desktop"><h1>${eh(state.hero.desktopTop)}<br><span class="hero-line">${eh(state.hero.desktopBottom)}</span></h1>\n${state.hero.desktopParagraphs.map(p=>`        <p>${eh(p)}</p>`).join("\n")}\n    </div>\n    <div class="hero-mobile"><h1>${eh(state.hero.mobileTop)}<br><span class="hero-line">${eh(state.hero.mobileBottom)}</span></h1><p>${eh(state.hero.mobileParagraph)}</p></div>\n    <div class="hero-note">${eh(state.hero.note)}</div>\n</div></section>\n<section id="projects"><h2>${eh(state.sectionTitles.projects)}</h2><div class="project-wrapper"><button class="nav-btn prev" type="button" aria-label="Xem dự án trước">‹</button><div class="project-track" id="projectTrack">\n${projects}\n        </div><button class="nav-btn next" type="button" aria-label="Xem dự án tiếp theo">›</button></div></section>\n<section id="qna"><h2>${eh(state.sectionTitles.qna)}</h2><div class="qna-wrapper"><div class="qna-slider">\n${qnas}\n        </div><div class="qna-preview-desktop"><div class="sticky-content"><button class="close-preview" type="button" aria-label="Đóng nội dung giải đáp">×</button><div id="desktop-content-placeholder"><div class="qna-empty-state"><p>Chọn một câu hỏi để xem chi tiết</p></div></div></div></div></div></section>\n<section id="services" class="services-section"><h2>${eh(state.sectionTitles.services)}</h2><div class="services-cards">\n${services}\n    </div></section>\n<section id="contact"><h2>${eh(state.sectionTitles.contact)}</h2><div class="contact-tagline">${eh(state.contact.tagline)}</div>\n${rows}\n</section>\n<footer class="site-footer"><div class="footer-inner"><div class="footer-left">${eh(state.footer.copyright)}</div><div class="footer-partners" data-partners-slot="footer" aria-label="Đối tác"></div></div></footer>\n</body>\n</html>\n`;
    }

    function renderPreview(){
        const hero = state.hero.backgrounds[0]?.path;
        const heroSrc = previewUrls.get(hero) || placeholder(hero || "Hero");
        const previewIsMobile = el.previewFrameShell.classList.contains("mobile");
        const previewWidth = Math.max(320, el.previewFrame.clientWidth || 560);
        const desktopPreviewScale = previewIsMobile
            ? 1
            : Math.max(0.28, Math.min(1, previewWidth / 1600));
        const projectLayout=normalizedProjectLayout(state.projectLayout);
        const projectRadius=projectLayout.rounded?projectLayout.radius:0;
        const heroLayout=normalizedHeroLayout(state.heroLayout);
        const heroVertical=normalizedHeroVertical(state.heroVertical);
        const heroTypography=normalizedHeroTypography(state.heroTypography);
        const totalDesktopGap=projectLayout.gap*5;

        const pro = state.projects.map(x => `
            <article
                class="project-card"
                style="background-image:url('${ea(previewUrls.get(x.imagePath) || placeholder(x.imagePath || x.title))}')">
                <div class="project-card-content">
                    <b>${eh(x.title)}</b>
                    <small>${eh(x.slogan)}</small>
                    <em>${eh(x.category)}</em>
                </div>
            </article>
        `).join("");

        const qs = state.qnas.map((x, i) => `
            <button
                class="qna-card-preview"
                type="button"
                data-qna-index="${i}">
                <span>${String(i + 1).padStart(2, "0")}</span>
                <b>${eh(x.question)}</b>
            </button>
        `).join("");

        const qnaDetails = state.qnas.map((x, i) => `
            <article class="qna-detail" data-qna-detail="${i}">
                <button class="qna-close" type="button" aria-label="Đóng">×</button>
                <h3>${eh(x.answerTitle)}</h3>
                ${x.paragraphs.map(p => `<p>${light(p)}</p>`).join("")}
                ${x.secondaryLabel && x.secondaryHref
                    ? `<a href="${ea(x.secondaryHref)}">${eh(x.secondaryLabel)}</a>`
                    : ""}
                ${x.ctaLabel && x.ctaHref
                    ? `<a href="${ea(x.ctaHref)}">${eh(x.ctaLabel)}</a>`
                    : ""}
                ${x.imagePath
                    ? `<img src="${ea(previewUrls.get(x.imagePath) || placeholder(x.imagePath))}" alt="">`
                    : ""}
            </article>
        `).join("");

        const ss = state.services.map(x => `
            <article class="service-card">
                <h3>${lines(x.title)}</h3>
                <p>${eh(x.description)}</p>
                <small>${eh(x.linkLabel)}</small>
            </article>
        `).join("");

        const cr = state.contact.rows.map(x => `
            <div class="contact-row-preview">
                <b>${eh(x.label)}</b>
                <span>${lines(x.content)}</span>
            </div>
        `).join("");

        const partnerMarkup = state.partners.map(code => {
            if (code === "mt") {
                return `
                    <span class="partner-preview">
                        <i>MT</i>
                        <b>MT CONSTRUCTION</b>
                    </span>
                `;
            }

            if (code === "titan") {
                return `
                    <span class="partner-preview">
                        <i>TITAN</i>
                        <b>TITAN CONSTRUCTION</b>
                    </span>
                `;
            }

            return `
                <span class="partner-preview">
                    <i>${eh(code)}</i>
                    <b>${eh(code)}</b>
                </span>
            `;
        }).join("");

        el.previewFrame.srcdoc = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">

    <style>
        @font-face{
            font-family:"Avo";
            src:
                local("UTM Avo"),
                url("../Fonts/UTM_Avo.ttf") format("truetype");
            font-display:swap;
        }

        @font-face{
            font-family:"God";
            src:
                local("UTM God WordR"),
                url("../Fonts/UTM_God_WordR.ttf") format("truetype");
            font-display:swap;
        }

        *{
            box-sizing:border-box;
        }

        html{
            scroll-behavior:smooth;
        }

        body{
            --page-background:url("${ea(heroSrc)}");

            position:relative;
            margin:0;
            overflow-x:hidden;
            background:#000;
            color:#eee;
            font-family:"Avo",Arial,sans-serif;
        }

        body::before{
            content:"";
            position:fixed;
            inset:0;
            z-index:-2;
            background:
                linear-gradient(rgba(0,0,0,.74),rgba(0,0,0,.78)),
                var(--page-background) center/cover no-repeat;
        }

        body::after{
            content:"";
            position:fixed;
            inset:0;
            z-index:-1;
            background:rgba(0,0,0,.08);
            pointer-events:none;
        }

        h1,
        h2,
        h3,
        .logo{
            font-family:"God",Georgia,serif;
            font-weight:400;
        }

        nav{
            position:sticky;
            top:0;
            z-index:20;
            height:55px;
            padding:0 6%;
            border-bottom:1px solid rgba(255,255,255,.08);
            background:rgba(0,0,0,.94);
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        .logo{
            color:#fff;
            font-size:12px;
            letter-spacing:.14em;
        }

        .links{
            display:flex;
            gap:14px;
            color:#aaa;
            font-size:8px;
        }

        .hero{
            min-height:${heroLayout.desktopHeight}vh;
            padding:
                ${heroVertical.desktopPaddingTop * desktopPreviewScale}px
                8%
                ${heroVertical.desktopPaddingBottom * desktopPreviewScale}px;
            display:grid;
            align-content:${heroAlignToGrid(heroVertical.desktopAlign)};
        }

        .hero h1{
            max-width:720px;
            margin:0;
            color:#fff;
            font-size:${heroTypography.titleDesktop}px;
            line-height:1.18;
        }

        .hero-line{
            display:inline-block;
            color:inherit;
            font:inherit;
            white-space:nowrap;
        }

        .hero p{
            max-width:650px;
            color:#ccc;
            font-size:${heroTypography.bodyDesktop}px;
            line-height:1.75;
        }

        .hero-note{
            margin-top:20px;
            color:#b48a5a;
            font-size:${heroTypography.noteDesktop}px;
            letter-spacing:.14em;
        }

        .page-section{
            padding:${120 * desktopPreviewScale}px 10%;
            background:transparent;
        }

        .page-section > h2{
            position:relative;
            margin:0 0 ${50 * desktopPreviewScale}px;
            color:#b48a5a;
            font-size:${Math.max(11,35.2*desktopPreviewScale)}px;
            text-align:left;
        }

        .page-section > h2::after{
            content:"";
            position:absolute;
            left:0;
            bottom:${-10 * desktopPreviewScale}px;
            width:${60 * desktopPreviewScale}px;
            height:${Math.max(1,3 * desktopPreviewScale)}px;
            background:#b48a5a;
        }

        /* =================================================
           PROJECTS — 1 HÀNG × 6 THẺ
        ================================================= */

        .project-slider{
            position:relative;
            width:110%;
            margin-left:-5%;
            overflow:hidden;
            touch-action:pan-y;
            overscroll-behavior-x:contain;
        }

        .project-nav{
            position:absolute;
            top:50%;
            z-index:10;
            transform:translateY(-50%);
            width:${Math.max(18,50*desktopPreviewScale)}px;
            height:${Math.max(18,50*desktopPreviewScale)}px;
            padding:0;
            border:0;
            border-radius:50%;
            background:rgba(180,138,90,.8);
            color:#fff;
            font-size:24px;
            cursor:pointer;
            transition:.25s ease;
        }

        .project-nav:hover{
            background:#fff;
            color:#000;
        }

        .project-nav:disabled{
            opacity:.28;
            pointer-events:none;
        }

        #projectPrev{left:5%}
        #projectNext{right:5%}

        .project-track-preview{
            display:flex;
            gap:${projectLayout.gap*desktopPreviewScale}px;
            padding:${20*desktopPreviewScale}px 0;
            will-change:transform;
            transition:transform .6s cubic-bezier(.25,1,.5,1);
        }

        .project-track-preview.is-dragging{
            transition:none;
        }

        .project-card{
            position:relative;
            display:block;
            flex:0 0 ${350*desktopPreviewScale}px;
            min-width:${350*desktopPreviewScale}px;
            height:${projectLayout.height*desktopPreviewScale}px;
            overflow:hidden;
            background-position:center;
            background-size:cover;
            border-radius:${projectRadius*desktopPreviewScale}px;
            contain:layout paint;
        }

        .project-card::after{
            content:"";
            position:absolute;
            inset:0;
            background:linear-gradient(transparent 30%,rgba(0,0,0,.92));
        }

        .project-card-content{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            z-index:1;
            width:100%;
            padding:${25 * desktopPreviewScale}px ${20 * desktopPreviewScale}px;
            background:linear-gradient(to top,rgba(0,0,0,.9),transparent);
        }

        .project-card-content b,
        .project-card-content small,
        .project-card-content em{
            display:block;
        }

        .project-card-content b{
            color:#fff;
            font-family:"God",Georgia,serif;
            font-size:${Math.max(5.5,19.2*desktopPreviewScale)}px;
        }

        .project-card-content small{
            margin-top:${4*desktopPreviewScale}px;
            color:#ddd;
            font-size:${Math.max(5,13*desktopPreviewScale)}px;
        }

        .project-card-content em{
            margin-top:${6*desktopPreviewScale}px;
            color:#b48a5a;
            font-size:${Math.max(4.5,11*desktopPreviewScale)}px;
            font-style:italic;
            letter-spacing:.12em;
            text-transform:uppercase;
        }

        /* =================================================
           Q&A — DANH SÁCH DỌC TOÀN CHIỀU NGANG
        ================================================= */

        .qna-section{
            background:rgba(0,0,0,.12);
            backdrop-filter:blur(4px);
        }

        .qna-layout{
            display:flex;
            align-items:flex-start;
            gap:22px;
        }

        .qna-list{
            width:100%;
            height:275px;
            padding-right:8px;
            overflow-y:auto;
            transition:width .35s ease;
        }

        .qna-layout.active .qna-list{
            width:43%;
        }

        .qna-card-preview{
            width:100%;
            min-height:37px;
            margin:0 0 7px;
            padding:9px 12px;
            border:1px solid rgba(255,255,255,.12);
            border-radius:5px;
            background:rgba(255,255,255,.045);
            color:#fff;
            text-align:left;
            cursor:pointer;
            display:flex;
            align-items:center;
            gap:10px;
            transition:.2s ease;
        }

        .qna-card-preview:hover,
        .qna-card-preview.active{
            transform:translateX(3px);
            border-left-color:#b48a5a;
            background:rgba(180,138,90,.11);
        }

        .qna-card-preview span{
            flex:0 0 auto;
            color:#b48a5a;
            font-family:"God",Georgia,serif;
            font-size:9px;
        }

        .qna-card-preview b{
            font-size:8px;
            font-weight:400;
        }

        .qna-list::-webkit-scrollbar{
            width:3px;
        }

        .qna-list::-webkit-scrollbar-thumb{
            background:#b48a5a;
            border-radius:10px;
        }

        .qna-detail-panel{
            display:none;
            width:57%;
            max-height:275px;
            overflow-y:auto;
            padding:20px;
            border:1px solid rgba(255,255,255,.13);
            border-radius:6px;
            background:rgba(13,13,13,.9);
        }

        .qna-layout.active .qna-detail-panel{
            display:block;
        }

        .qna-detail{
            display:none;
            position:relative;
        }

        .qna-detail.active{
            display:block;
        }

        .qna-detail h3{
            margin:0 30px 14px 0;
            color:#ffc685;
            font-size:16px;
        }

        .qna-detail p{
            color:#ccc;
            font-size:8px;
            line-height:1.8;
        }

        .qna-detail a{
            display:inline-block;
            margin:8px 12px 8px 0;
            color:#b48a5a;
            font-size:8px;
            text-decoration:none;
        }

        .qna-detail img{
            width:100%;
            margin-top:10px;
            border-radius:5px;
        }

        .qna-close{
            position:absolute;
            top:-4px;
            right:0;
            border:0;
            background:transparent;
            color:#777;
            font-size:22px;
            cursor:pointer;
        }

        /* =================================================
           SERVICES / QUY TRÌNH
        ================================================= */

        .services-grid{
            display:grid;
            grid-template-columns:repeat(4,minmax(0,1fr));
            gap:12px;
        }

        .service-card{
            min-height:145px;
            padding:22px 16px;
            border:1px solid rgba(255,255,255,.13);
            background:rgba(0,0,0,.38);
            transition:.25s ease;
        }

        .service-card:hover{
            transform:translateY(-5px);
            border-color:#b48a5a;
            background:rgba(180,138,90,.1);
        }

        .service-card h3{
            margin:0 0 12px;
            color:#b48a5a;
            font-size:14px;
            line-height:1.2;
        }

        .service-card p{
            min-height:46px;
            margin:0;
            color:#ddd;
            font-size:7.5px;
            line-height:1.65;
        }

        .service-card small{
            display:block;
            margin-top:14px;
            color:#b48a5a;
            font-size:7px;
            font-style:italic;
        }

        /* =================================================
           CONTACT
        ================================================= */

        .contact-section{
            border-top:1px solid rgba(255,255,255,.1);
            background:rgba(0,0,0,.22);
        }

        .contact-tagline-preview{
            margin:-2px 0 18px;
            color:#b48a5a;
            font-family:"God",Georgia,serif;
            font-size:10px;
            letter-spacing:.04em;
        }

        .contact-data{
            max-width:620px;
        }

        .contact-row-preview{
            margin-bottom:10px;
            display:grid;
            grid-template-columns:70px minmax(0,1fr);
            gap:12px;
            color:#eee;
            font-size:8px;
            line-height:1.65;
        }

        .contact-row-preview b{
            color:#bbb;
            font-weight:600;
        }

        /* =================================================
           FOOTER
        ================================================= */

        .site-footer-preview{
            padding:17px 7.5%;
            border-top:1px solid rgba(255,255,255,.08);
            background:#000;
            color:#555;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:20px;
            font-size:7px;
        }

        .footer-copyright-preview{
            font-family:"God",Georgia,serif;
        }

        .footer-partners-preview{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            gap:8px;
        }

        .footer-partners-preview > small{
            color:#666;
            font-size:6px;
            letter-spacing:.13em;
            text-transform:uppercase;
        }

        .partner-preview{
            display:inline-flex;
            align-items:center;
            gap:5px;
            color:#777;
        }

        .partner-preview i{
            min-width:20px;
            min-height:13px;
            padding:2px 4px;
            border:1px solid #555;
            color:#888;
            font-size:6px;
            font-style:normal;
            display:grid;
            place-items:center;
        }

        .partner-preview b{
            font-size:6px;
            font-weight:400;
            white-space:nowrap;
        }

        .preview-mobile .links{
            display:none;
        }

        .preview-mobile .hero{
            min-height:${heroLayout.mobileHeight}vh;
            padding:
                ${heroVertical.mobilePaddingTop}px
                7%
                ${heroVertical.mobilePaddingBottom}px;
            align-content:${heroAlignToGrid(heroVertical.mobileAlign)};
        }

        .preview-mobile .hero h1{
            font-size:${heroTypography.titleMobile}px;
        }
        .preview-mobile .hero p{
            font-size:${heroTypography.bodyMobile}px;
        }

        .preview-mobile .hero-note{
            font-size:${heroTypography.noteMobile}px;
        }

        .preview-mobile .page-section{
            padding:44px 7%;
        }

        .preview-mobile .project-slider{
            width:calc(100% + 14%);
            margin-left:-7%;
            padding-left:7%;
            padding-right:7%;
            overflow-x:auto;
            overflow-y:hidden;
            scroll-snap-type:x mandatory;
            scrollbar-width:none;
            -webkit-overflow-scrolling:touch;
            touch-action:pan-x pan-y;
        }

        .preview-mobile .project-slider::-webkit-scrollbar{
            display:none;
        }

        .preview-mobile .project-nav{
            display:none;
        }

        .preview-mobile .project-card{
            flex:0 0 min(320px,78vw);
            min-width:min(320px,78vw);
            height:${projectLayout.height}px;
            border-radius:${projectRadius}px;
            scroll-snap-align:start;
            user-select:none;
            -webkit-user-drag:none;
        }

        .preview-mobile .project-track-preview{
            width:max-content;
            gap:${projectLayout.gap}px;
            padding:16px 0 24px;
            transform:none !important;
            transition:none !important;
            will-change:auto;
        }

        .preview-mobile .project-card-content{
            left:0;
            right:0;
            bottom:0;
            padding:22px 18px;
        }

        .preview-mobile .project-card-content b{font-size:1.05rem}
        .preview-mobile .project-card-content small{font-size:.85rem;margin-top:4px}
        .preview-mobile .project-card-content em{font-size:.7rem;margin-top:6px}

        .preview-mobile .qna-layout,
        .preview-mobile .qna-layout.active{
            display:block;
        }

        .preview-mobile .qna-list,
        .preview-mobile .qna-layout.active .qna-list{
            width:100%;
            height:auto;
            max-height:none;
        }

        .preview-mobile .qna-detail-panel,
        .preview-mobile .qna-layout.active .qna-detail-panel{
            width:100%;
            max-height:none;
            margin-top:12px;
        }

        .preview-mobile .services-grid{
            grid-template-columns:1fr;
        }

        .preview-mobile .contact-row-preview{
            grid-template-columns:1fr;
            gap:2px;
        }

        .preview-mobile .site-footer-preview{
            flex-direction:column;
            align-items:flex-start;
        }

        .preview-mobile .footer-partners-preview{
            justify-content:flex-start;
            flex-wrap:wrap;
        }
    </style>
</head>

<body class="${previewIsMobile ? "preview-mobile" : "preview-desktop"}">
    <nav>
        <div class="logo">DREAMESE STUDIO</div>

        <div class="links">
            VỀ CHÚNG TÔI · DỰ ÁN · GIẢI ĐÁP · DỊCH VỤ · LIÊN HỆ
        </div>
    </nav>

    <section class="hero">
        <h1>
            ${eh(state.hero.desktopTop)}<br>
            <span class="hero-line">${eh(state.hero.desktopBottom)}</span>
        </h1>

        ${state.hero.desktopParagraphs.map(p => `<p>${eh(p)}</p>`).join("")}

        <div class="hero-note">${eh(state.hero.note)}</div>
    </section>

    <section class="page-section">
        <h2>${eh(state.sectionTitles.projects)}</h2>

        <div class="project-slider">
            <button class="project-nav" id="projectPrev" type="button">‹</button>

            <div class="project-track-preview" id="previewProjects">
                ${pro}
            </div>

            <button class="project-nav" id="projectNext" type="button">›</button>
        </div>
    </section>

    <section class="page-section qna-section">
        <h2>${eh(state.sectionTitles.qna)}</h2>

        <div class="qna-layout" id="previewQnaLayout">
            <div class="qna-list" id="previewQnaList">
                ${qs}
            </div>

            <div class="qna-detail-panel" id="previewQnaDetailPanel">
                ${qnaDetails}
            </div>
        </div>
    </section>

    <section class="page-section">
        <h2>${eh(state.sectionTitles.services)}</h2>

        <div class="services-grid">
            ${ss}
        </div>
    </section>

    <section class="page-section contact-section">
        <h2>${eh(state.sectionTitles.contact)}</h2>

        <div class="contact-tagline-preview">
            ${eh(state.contact.tagline)}
        </div>

        <div class="contact-data">
            ${cr}
        </div>
    </section>

    <footer class="site-footer-preview">
        <span class="footer-copyright-preview">
            ${eh(state.footer.copyright)}
        </span>

        <span class="footer-partners-preview">
            ${state.partners.length
                ? `<small>In collaboration with</small>${partnerMarkup}`
                : `<small>${eh(state.footer.email)} - ${eh(state.footer.phone)}</small>`}
        </span>
    </footer>

    <script>
        (function(){
            var projectTrack = document.getElementById("previewProjects");
            var projectWrapper = projectTrack.closest(".project-slider");
            var projectPrev = document.getElementById("projectPrev");
            var projectNext = document.getElementById("projectNext");
            var projectItems = Array.from(projectTrack.querySelectorAll(".project-card"));
            var projectIndex = 0;
            var wheelLocked = false;
            var activePointerId = null;
            var dragStartX = 0;
            var dragStartY = 0;
            var dragCurrentX = 0;
            var dragBaseTranslate = 0;
            var dragDirection = "";

            function projectConfig(){
                var style = getComputedStyle(projectTrack);
                var gap = parseFloat(style.columnGap || style.gap) || 0;
                var itemWidth = projectItems[0]
                    ? projectItems[0].getBoundingClientRect().width
                    : 350;
                var step = itemWidth + gap;
                var wrapperWidth = projectWrapper.getBoundingClientRect().width;
                var visibleCount = Math.max(1, Math.floor((wrapperWidth + gap) / step));
                var maxIndex = Math.max(0, projectItems.length - visibleCount);
                return { step:step, maxIndex:maxIndex };
            }

            function updateProjects(animate){
                if (document.body.classList.contains("preview-mobile")) {
                    projectTrack.classList.remove("is-dragging");
                    projectTrack.style.transform = "none";
                    projectPrev.disabled = true;
                    projectNext.disabled = true;
                    return;
                }

                var config = projectConfig();
                projectIndex = Math.max(0, Math.min(projectIndex, config.maxIndex));
                projectTrack.classList.toggle("is-dragging", animate === false);
                projectTrack.style.transform = "translate3d(" + (-projectIndex * config.step) + "px,0,0)";
                projectPrev.disabled = projectIndex <= 0;
                projectNext.disabled = projectIndex >= config.maxIndex;
            }

            function moveProject(direction){
                projectIndex += direction;
                updateProjects(true);
            }

            projectPrev.addEventListener("click", function(){ moveProject(-1); });
            projectNext.addEventListener("click", function(){ moveProject(1); });

            projectWrapper.addEventListener("wheel", function(event){
                if (document.body.classList.contains("preview-mobile")) return;
                var delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
                    ? event.deltaX
                    : event.deltaY;
                if (Math.abs(delta) < 4) return;
                var direction = delta > 0 ? 1 : -1;
                var config = projectConfig();
                var atStart = projectIndex <= 0 && direction < 0;
                var atEnd = projectIndex >= config.maxIndex && direction > 0;
                if (atStart || atEnd) return;
                event.preventDefault();
                if (wheelLocked) return;
                wheelLocked = true;
                moveProject(direction);
                setTimeout(function(){ wheelLocked = false; }, 420);
            }, { passive:false });

            projectWrapper.addEventListener("pointerdown", function(event){
                if (document.body.classList.contains("preview-mobile")) return;
                if (event.pointerType === "mouse") return;
                activePointerId = event.pointerId;
                dragStartX = event.clientX;
                dragStartY = event.clientY;
                dragCurrentX = event.clientX;
                dragDirection = "";
                dragBaseTranslate = -projectIndex * projectConfig().step;
                projectWrapper.setPointerCapture && projectWrapper.setPointerCapture(event.pointerId);
            });

            projectWrapper.addEventListener("pointermove", function(event){
                if (event.pointerId !== activePointerId) return;
                var dx = event.clientX - dragStartX;
                var dy = event.clientY - dragStartY;
                dragCurrentX = event.clientX;
                if (!dragDirection) {
                    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
                    dragDirection = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
                }
                if (dragDirection !== "horizontal") return;
                event.preventDefault();
                projectTrack.classList.add("is-dragging");
                projectTrack.style.transform = "translate3d(" + (dragBaseTranslate + dx) + "px,0,0)";
            }, { passive:false });

            function finishProjectPointer(event){
                if (event.pointerId !== activePointerId) return;
                var dx = dragCurrentX - dragStartX;
                var horizontal = dragDirection === "horizontal";
                activePointerId = null;
                dragDirection = "";
                if (horizontal && Math.abs(dx) >= 45) {
                    projectIndex += dx < 0 ? 1 : -1;
                }
                updateProjects(true);
            }

            projectWrapper.addEventListener("pointerup", finishProjectPointer);
            projectWrapper.addEventListener("pointercancel", finishProjectPointer);
            addEventListener("resize", function(){ updateProjects(false); });
            updateProjects(false);

            var qnaLayout = document.getElementById("previewQnaLayout");
            var qnaButtons = Array.from(
                document.querySelectorAll(".qna-card-preview")
            );
            var qnaDetails = Array.from(
                document.querySelectorAll(".qna-detail")
            );

            function closeQna(){
                qnaLayout.classList.remove("active");

                qnaButtons.forEach(function(button){
                    button.classList.remove("active");
                });

                qnaDetails.forEach(function(detail){
                    detail.classList.remove("active");
                });
            }

            qnaButtons.forEach(function(button){
                button.addEventListener("click", function(){
                    var index = button.dataset.qnaIndex;

                    qnaLayout.classList.add("active");

                    qnaButtons.forEach(function(item){
                        item.classList.toggle("active", item === button);
                    });

                    qnaDetails.forEach(function(detail){
                        detail.classList.toggle(
                            "active",
                            detail.dataset.qnaDetail === index
                        );
                    });
                });
            });

            document.querySelectorAll(".qna-close").forEach(function(button){
                button.addEventListener("click", closeQna);
            });
        })();
    <\/script>
</body>
</html>`;
    }

    function renderValidation(){const issues=[];if(!state.settings.fileName.trim())issues.push("Chưa có tên file HTML.");if(!state.hero.backgrounds.length)issues.push("Chưa có hình nền Hero.");if(!state.projects.length)issues.push("Chưa có dự án.");if(!state.qnas.length)issues.push("Chưa có Q&A.");const bad=state.projects.filter(x=>!x.title.trim()||!x.href.trim()||!x.imagePath.trim()).length;if(bad)issues.push(`${bad} dự án còn thiếu thông tin.`);el.validationBox.className="validation-box "+(issues.length?"warning":"success");el.validationBox.innerHTML=issues.length?`<strong>Cần chú ý:</strong><br>${issues.map(eh).join("<br>")}`:"Trang chủ đã sẵn sàng để xuất.";}

    async function exportZip(){const z=new StoreZip();await z.text(htmlName(),buildHtml());await z.text(baseName()+".home.json",JSON.stringify(serializable(),null,2));await z.text("HUONG-DAN.txt",`Chép ${htmlName()} vào thư mục gốc website. Website cần HOME.css, HOME.js, logo và các thư mục hình đúng đường dẫn.`);download(baseName()+"-Home-Website.zip",z.build());status("Đã tạo ZIP.","success");}
    async function writeWebsite(){if(!window.showDirectoryPicker){status("Hãy dùng Chrome/Edge hoặc tải HTML.","error");return;}try{const dir=await window.showDirectoryPicker({mode:"readwrite"});if(!confirm("Ghi đè "+htmlName()+" trong thư mục đã chọn?"))return;const fh=await dir.getFileHandle(htmlName(),{create:true}),w=await fh.createWritable();await w.write(buildHtml());await w.close();status("Đã ghi trang chủ vào website.","success");}catch(e){if(e.name!=="AbortError")status("Không thể ghi file: "+e.message,"error");}}

    function blankState(){return{id:uid(),settings:{fileName:"dreamese.html",pageTitle:"Dreamese - Kiến trúc & Nội thất",cssPath:"HOME.css",jsPath:"HOME.js",logoPath:"Dreamese_Studio.png"},partners:[],sectionTitles:{projects:"Dự án tiêu biểu",qna:"Góc giải đáp",services:"Dịch vụ",contact:"Liên hệ"},projectLayout:{height:450,gap:24,rounded:true,radius:4},heroLayout:{desktopHeight:100,mobileHeight:100},heroVertical:{desktopAlign:"center",mobileAlign:"center",desktopPaddingTop:120,desktopPaddingBottom:120,mobilePaddingTop:100,mobilePaddingBottom:100},heroTypography:{titleDesktop:64,bodyDesktop:16,titleMobile:34,bodyMobile:16,noteDesktop:12,noteMobile:12},hero:{desktopTop:"Những câu chuyện được kể lại",desktopBottom:"bằng không gian sống thật.",desktopParagraphs:[],mobileTop:"Thiết kế không gian",mobileBottom:"kể câu chuyện của bạn",mobileParagraph:"",note:"DREAMESE STUDIO — Dịch giả ngôn ngữ giấc mơ",backgrounds:[],preloadPath:""},projects:[],qnas:[],services:[],contact:{tagline:"DREAMESE STUDIO – Đồng hành kiến tạo không gian sống.",rows:[]},footer:{copyright:"© DREAMESE STUDIO – Architecture & Interior Design",email:"vtv.arc@gmail.com",phone:"09 4363 4758"}};}
    function blankProject(){return{id:uid(),href:"Du_An_Moi.html",title:"Dự án mới",slogan:"",category:"",imagePath:""};}
    function blankQna(){return{id:uid(),question:"Câu hỏi mới",answerTitle:"",paragraphs:[],secondaryLabel:"",secondaryHref:"",ctaLabel:"Trao đổi cùng KTS →",ctaHref:"#contact",imagePath:""};}
    function blankService(){return{id:uid(),href:"",title:"Dịch vụ mới",description:"",linkLabel:"Quy trình triển khai →"};}
    function blankContact(){return{id:uid(),label:"Thông tin:",content:""};}
    function normalizeState(s){const b=blankState(),x=s||{};return{id:x.id||b.id,settings:{...b.settings,...x.settings},partners:Array.isArray(x.partners)?x.partners:[],sectionTitles:{...b.sectionTitles,...x.sectionTitles},projectLayout:normalizedProjectLayout(x.projectLayout||b.projectLayout),heroLayout:normalizedHeroLayout(x.heroLayout||b.heroLayout),heroVertical:normalizedHeroVertical(x.heroVertical||b.heroVertical),heroTypography:normalizedHeroTypography(x.heroTypography||b.heroTypography),hero:{...b.hero,...x.hero,desktopParagraphs:Array.isArray(x.hero?.desktopParagraphs)?x.hero.desktopParagraphs:paragraphs(x.hero?.desktopParagraphs||""),backgrounds:Array.isArray(x.hero?.backgrounds)?x.hero.backgrounds.map(y=>({id:y.id||uid(),path:y.path||""})):[]},projects:Array.isArray(x.projects)?x.projects.map(y=>({...blankProject(),...y,id:y.id||uid()})):[],qnas:Array.isArray(x.qnas)?x.qnas.map(y=>({...blankQna(),...y,id:y.id||uid(),paragraphs:Array.isArray(y.paragraphs)?y.paragraphs:paragraphs(y.paragraphs||"")})):[],services:Array.isArray(x.services)?x.services.map(y=>({...blankService(),...y,id:y.id||uid()})):[],contact:{...b.contact,...x.contact,rows:Array.isArray(x.contact?.rows)?x.contact.rows.map(y=>({...blankContact(),...y,id:y.id||uid()})):[]},footer:{...b.footer,...x.footer}};}
    function serializable(){return JSON.parse(JSON.stringify(state));}
    function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(serializable()));}catch(e){}}
    function restore(){try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");if(s)state=normalizeState(s);}catch(e){}}
    function queue(){persist();renderValidation();clearTimeout(previewTimer);previewTimer=setTimeout(renderPreview,220);}
    function assets(){return[...state.hero.backgrounds.map(x=>({path:x.path})),...state.projects.map(x=>({path:x.imagePath})),...state.qnas.map(x=>({path:x.imagePath}))];}
    function clearPreviewUrls(){previewUrls.forEach(URL.revokeObjectURL);previewUrls.clear();}
    function setPath(o,p,v){let t=o;p.slice(0,-1).forEach(k=>t=t[k]);t[p.at(-1)]=v;}
    function splitLayoutTitle(value) {
        const lines = String(value || "")
            .replace(/\r/g, "")
            .split("\n");

        const beforeBreak = (lines.shift() || "").trim();
        const afterBreak = lines.join(" ").trim();

        return {
            beforeBreak,
            afterBreak
        };
    }

    function clampNumber(value,minimum,maximum,fallback){const number=Number(value);if(!Number.isFinite(number))return fallback;return Math.max(minimum,Math.min(maximum,Math.round(number)));}
    function normalizedProjectLayout(layout){const source=layout||{};return{height:clampNumber(source.height,25,900,450),gap:clampNumber(source.gap,0,60,24),rounded:source.rounded!==false,radius:clampNumber(source.radius,1,40,4)};}
    function normalizedHeroLayout(layout){const source=layout||{};return{desktopHeight:clampNumber(source.desktopHeight,25,200,100),mobileHeight:clampNumber(source.mobileHeight,25,200,100)};}
    function normalizedHeroVertical(vertical){
        const source=vertical||{};
        const align=value=>["start","center","end"].includes(value)?value:"center";
        return{
            desktopAlign:align(source.desktopAlign),
            mobileAlign:align(source.mobileAlign),
            desktopPaddingTop:clampNumber(source.desktopPaddingTop,0,300,120),
            desktopPaddingBottom:clampNumber(source.desktopPaddingBottom,0,300,120),
            mobilePaddingTop:clampNumber(source.mobilePaddingTop,0,240,100),
            mobilePaddingBottom:clampNumber(source.mobilePaddingBottom,0,240,100)
        };
    }
    function heroAlignToCss(value){
        return value==="start"?"flex-start":value==="end"?"flex-end":"center";
    }
    function heroAlignToGrid(value){
        return value==="start"?"start":value==="end"?"end":"center";
    }
    function normalizedHeroTypography(type){const source=type||{};return{titleDesktop:clampNumber(source.titleDesktop,20,120,64),bodyDesktop:clampNumber(source.bodyDesktop,10,36,16),titleMobile:clampNumber(source.titleMobile,18,72,34),bodyMobile:clampNumber(source.bodyMobile,10,28,16),noteDesktop:clampNumber(source.noteDesktop,8,24,12),noteMobile:clampNumber(source.noteMobile,8,22,12)};}

    function paragraphs(v){return String(v||"").split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);}
    function lines(v){return String(v||"").split(/\r?\n/).map(eh).join("<br>");}
    function light(v){return eh(v).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");}
    function norm(v){return String(v||"").replaceAll("\\","/").replace(/^\.?\//,"").replace(/\/+/g,"/");}
    function safe(v){return String(v||"").trim().replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g,"_");}
    function ensureHtml(v){const x=String(v||"dreamese.html").trim();return /\.html?$/i.test(x)?x:x+".html";}
    function htmlName(){return ensureHtml(state.settings.fileName);}
    function baseName(){return htmlName().replace(/\.html?$/i,"");}
    function phoneHref(v){const d=String(v||"").replace(/[^\d+]/g,"");return d.startsWith("0")?"+84"+d.slice(1):d;}
    function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random();}
    function status(m,t=""){el.statusBar.textContent=m;el.statusBar.className=("status-bar "+t).trim();}
    function eh(v){return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}
    function ea(v){return eh(v).replaceAll("\n","&#10;");}
    function placeholder(label){const name=String(label||"Image").split("/").at(-1).slice(0,28),svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#181818"/><path d="M0 520L220 300L390 450L520 330L800 600H0Z" fill="#282828"/><circle cx="615" cy="155" r="55" fill="#b48a5a" opacity=".48"/><text x="50%" y="52%" fill="#888" font-family="Arial" font-size="28" text-anchor="middle">${eh(name)}</text></svg>`;return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);}
    function download(name,blob){const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);status(`Đã tạo ${name}.`,"success");}

    class StoreZip{constructor(){this.f=[];}async text(path,text){this.f.push({path:norm(path),bytes:new TextEncoder().encode(text)});}build(){const lp=[],cp=[];let off=0;for(const e of this.f){const n=new TextEncoder().encode(e.path),crc=crc32(e.bytes),dt=dos(new Date()),lh=new Uint8Array(30+n.length),lv=new DataView(lh.buffer);lv.setUint32(0,0x04034b50,true);lv.setUint16(4,20,true);lv.setUint16(6,0x0800,true);lv.setUint16(8,0,true);lv.setUint16(10,dt.time,true);lv.setUint16(12,dt.date,true);lv.setUint32(14,crc,true);lv.setUint32(18,e.bytes.length,true);lv.setUint32(22,e.bytes.length,true);lv.setUint16(26,n.length,true);lh.set(n,30);lp.push(lh,e.bytes);const ch=new Uint8Array(46+n.length),cv=new DataView(ch.buffer);cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint16(8,0x0800,true);cv.setUint16(12,dt.time,true);cv.setUint16(14,dt.date,true);cv.setUint32(16,crc,true);cv.setUint32(20,e.bytes.length,true);cv.setUint32(24,e.bytes.length,true);cv.setUint16(28,n.length,true);cv.setUint32(42,off,true);ch.set(n,46);cp.push(ch);off+=lh.length+e.bytes.length;}const size=cp.reduce((s,x)=>s+x.length,0),end=new Uint8Array(22),v=new DataView(end.buffer);v.setUint32(0,0x06054b50,true);v.setUint16(8,this.f.length,true);v.setUint16(10,this.f.length,true);v.setUint32(12,size,true);v.setUint32(16,off,true);return new Blob([...lp,...cp,end],{type:"application/zip"});}}
    function dos(d){const y=Math.max(1980,d.getFullYear());return{time:(d.getHours()<<11)|(d.getMinutes()<<5)|Math.floor(d.getSeconds()/2),date:((y-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate()};}
    const CT=(()=>{const t=new Uint32Array(256);for(let i=0;i<256;i++){let v=i;for(let b=0;b<8;b++)v=(v&1)?0xedb88320^(v>>>1):v>>>1;t[i]=v>>>0;}return t;})();
    function crc32(bytes){let c=0xffffffff;for(const b of bytes)c=CT[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0;}
})();
