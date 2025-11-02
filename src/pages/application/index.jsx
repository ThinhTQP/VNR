import "./styles.css";

const ApplicationPage = () => {
  return (
    <div
      id="application_page"
      className="w-full flex flex-col items-center gap-20 overflow-y-auto px-2 md:px-4 pt-30"
    >
      <div className="w-full max-w-6xl flex items-center justify-center py-6 md:py-10">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bungee leading-tight">
          VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẢNG CỘNG SẢN
        </p>
      </div>

      {/* Section 1 */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10">
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          1. Xây dựng Đảng trong sạch, vững mạnh
        </p>

        {/* Content */}
        <div className="w-full flex flex-col gap-8">
          <p className="font-grenze text-[40px]">CHIẾN DỊCH ĐỐT LÒ</p>

          <p className="font-grenze text-[36px]">
            Trong 3 nhiệm kỳ Đại hội Đảng từ XI, XII và XIII, với vai trò là
            người đứng đầu Đảng, Trưởng Ban chỉ đạo Trung ương về phòng, chống
            tham nhũng, Tổng Bí thư Nguyễn Phú Trọng đã chỉ đạo xử lý nghiêm các
            vụ tiêu cực, tham nhũng.
          </p>

          <p className="font-grenze text-[36px] font-light">
            Nhìn lại lịch sử phát triển Đảng, chưa có giai đoạn nào, số tổ chức
            đảng, số đảng viên bị kỷ luật nhiều như giai đoạn 2012-2022. Chỉ
            trong vòng 10 năm, đã có hơn 2.700 tổ chức Đảng, gần 168.000 đảng
            viên bị thi hành kỷ luật, trong đó có hơn 7.390 đảng viên bị kỷ luật
            do tham nhũng. Đó là những thanh "củi khô, củi tươi" bị đốt cháy bởi
            cái "lò "phòng chống tham nhũng do Tổng Bí thư Nguyễn Phú Trọng đứng
            đầu. Dù rất đau xót, nhưng vẫn phải làm.
          </p>

          <div className="w-full flex flex-col items-center gap-6">
            <img src="/images/application/1.png" className="w-full" />
            <p className="text-[17px] italic">
              (“Người Đốt Lò Vĩ Đại” - Tổng bí thư Nguyễn Phú Trọng cùng câu nói
              nổi tiếng về việc chống tham nhũng)
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10">
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          2. Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH
        </p>

        {/* Content */}
        <div className="w-full flex flex-col gap-8">
          <p className="font-grenze text-[36px]">
            Gắn độc lập dân tộc với CNXH, Đảng Cộng sản Việt Nam đã huy động
            được lực lượng to lớn nhất của toàn dân tộc, các giai cấp, tầng lớp
            nhân dân trong cuộc đấu tranh giành độc lập dân tộc. Giành được độc
            lập dân tộc mà không đưa đất nước phát triển theo con đường XHCN là
            phản bội lại sự hy sinh của lớp lớp các chiến sĩ cách mạng tiền bối
            trong quá trình đấu tranh giành độc lập dân tộc, đồng thời độc lập
            dân tộc cũng không được bảo đảm vững chắc.
          </p>

          <p className="font-grenze text-[36px] font-light">
            <span className="font-medium">
              Giữ vững tinh thần đó, Đại Hội Đảng lần thứ VIII được tổ chức với
              mục tiêu:
            </span>{" "}
            “Nâng cao năng lực lãnh đạo, năng lực cầm quyền và sức chiến đấu của
            Đảng; xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh toàn
            diện; củng cố, tăng cường niềm tin của nhân dân đối với Đảng, Nhà
            nước, chế độ xã hội chủ nghĩa; khơi dậy khát vọng phát triển đất
            nước phồn vinh, hạnh phúc, phát huy ý chí và sức mạnh đại đoàn kết
            toàn dân tộc kết hợp với sức mạnh thời đại; đẩy mạnh toàn diện, đồng
            bộ công cuộc đổi mới, công nghiệp hoá, hiện đại hóa; xây dựng và bảo
            vệ vững chắc Tổ quốc, giữ vững môi trường hòa bình, ổn định; phấn
            đấu đến giữa thế kỷ XXI, nước ta trở thành nước phát triển, theo
            định hướng xã hội chủ nghĩa.”
          </p>

          <div className="w-full flex flex-col items-center gap-6">
            <img src="/images/application/2.png" className="w-full" />
            <p className="text-[17px] italic">
              (Đại hội XIII của Đảng là sự kiện chính trị trọng đại nhất của
              Đảng và của dân tộc ta trong năm 2021.)
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10">
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          3. Đoàn kết, hội nhập quốc tế
        </p>

        {/* Content */}
        <div className="w-full flex flex-col gap-8">
          <p className="font-grenze text-[36px]">
            Đánh giá thực trạng việc thực hiện nguyên tắc Đảng gắn bó mật thiết
            với nhân dân, Văn kiện Đại hội Đại biểu toàn quốc lần thứ XIII của
            Đảng đã nêu rõ: “Công tác tiếp dân và đối thoại với nhân dân của
            người đứng đầu cấp ủy, chính quyền từng bước đi vào nền nếp”, “công
            tác dân vận được chú trọng và tiếp tục đổi mới; quan điểm “dân là
            gốc”, là chủ thể của công cuộc đổi mới tiếp tục được nhận thức và
            thực hiện sâu sắc, đầy đủ hơn”; mối quan hệ mật thiết giữa Đảng với
            nhân dân được củng cố, tăng cường.
          </p>

          <p className="font-grenze text-[36px] font-light">
            Ngay từ khi ra đời, Ðảng đã đặt lên hàng đầu nhiệm vụ xây dựng mối
            quan hệ với nhân dân, coi đó là một chiến lược, một nhân tố quyết
            định thắng lợi của cách mạng Việt Nam. Cương lĩnh chính trị đầu tiên
            của Ðảng do Hội nghị hợp nhất thành lập Ðảng thông qua xác định một
            nhiệm vụ cấp bách, đồng thời là một tầm nhìn chiến lược lâu dài:
            Ðảng phải “thu phục” giai cấp công nhân, giai cấp nông dân, “hết sức
            liên lạc” với các giai cấp, tầng lớp nhân dân khác, chỉ đánh đổ
            những bộ phận “ra mặt phản cách mạng”.
          </p>

          <div className="w-full flex flex-col items-center gap-6">
            <img src="/images/application/3.png" className="w-full" />
            <p className="text-[17px] italic">
              (Đại diện lãnh đạo UBND tỉnh Lạng Sơn kiểm tra mô hình trồng cây
              mắc-ca của các hộ dân ở xã An Sơn, huyện Văn Quan)
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-6">
            <img src="/images/application/4.png" className="w-full" />
            <p className="text-[17px] italic">
              (Tổng Bí thư Nguyễn Phú Trọng với nhân dân thôn Tân Văn, xã Tượng
              Sơn, huyện Thạnh Hà, tỉnh Hà Tĩnh)
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10 mb-50">
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          4. đảng phải gắn bó mật thiết với nhân dân
        </p>

        {/* Content */}
        <div className="w-full flex flex-col gap-8">
          <p className="font-grenze text-[36px]">
            Trong tình hình Thế giới còn nhiều diễn biến bất ngờ, phức tạp thì
            vấn đề hội nhập Quốc tế với tinh thần chủ động, tích cực, mềm dẻo,
            linh hoạt có ý nghĩa vô cùng quan trọng.
          </p>

          <p className="font-grenze text-[36px] font-light">
            Từ quan hệ hợp tác toàn diện với Liên Xô, với Lào và Campuchia, với
            các nước khác trong Hội đồng tương trợ kinh tế… đến nay, Việt Nam đã
            xác lập mối quan hệ thương mại với trên 200 quốc gia và vùng lãnh
            thổ trên thế giới, là đối tác chiến lược và đối tác toàn diện với
            gần 30 quốc gia, trong đó có tất cả các nước lớn và 5 nước Ủy viên
            thường trực Hội đồng bảo an Liên hợp quốc, là đối tác toàn diện với
            tất cả các nước trong cộng đồng ASEAN; lần đầu tiên được bầu vào Ủy
            ban Luật thương mại quốc tế của Liên hợp quốc (UNCITRAL); lần thứ
            hai được bầu, trở thành Ủy viên không thường trực Hội đồng bảo an
            Liên hợp quốc nhiệm kỳ 2020 - 2021 và tới 2020, là Chủ tịch luân
            phiên của ASEAN. Là thành viên của WTO, của nhiều thể chế đa phương,
            đến nay, Việt Nam đã tham gia và đang đàm phán ký kết 16 Hiệp định
            thương mại tự do FTA với 59 đối tác trên toàn thế giới.
          </p>

          <p className="font-grenze text-[40px]">
            CHIẾN DỊCH ỦNG HỘ NHÂN DÂN CUBA
          </p>

          <p className="font-grenze text-[36px]">
            Theo thông tin từ Hội Chữ thập đỏ Việt Nam, tính đến 11 giờ ngày
            21-8, Chương trình vận động ủng hộ nhân dân Cuba với chủ đề "65 năm
            Nghĩa tình Việt Nam - Cuba" đã đạt số tiền 360,1 tỷ đồng, với hơn
            1,82 triệu lượt ủng hộ, gấp gần 4 lần số tiền mục tiêu tối thiểu đặt
            ra.
          </p>

          <p className="font-grenze text-[36px] font-light">
            Đây là minh chứng sinh động cho tình đoàn kết hữu nghị đặc biệt,
            thủy chung, son sắt của nhân dân Việt Nam đối với nhân dân Cuba anh
            em; đồng thời là nguồn lực quý báu góp phần giúp bạn vượt qua khó
            khăn, ổn định đời sống và tiếp tục phát triển”.
          </p>
          <div className="w-full flex flex-col items-center gap-6">
            <img src="/images/application/5.png" className="w-full" />
          </div>

          <p className="font-grenze text-[40px]">
            TRỞ THÀNH MỘT TRONG 20 NỀN THƯƠNG MẠI LỚN NHẤT THẾ GIỚI
          </p>

          <p className="font-grenze text-[36px]">
            WTO ghi nhận việc Việt Nam trở thành một nền kinh tế có độ mở cao,
            tới 200% GDP và cải thiện cán cân thương mại hàng hóa, chuyển từ
            nhập siêu sang xuất siêu trong giai đoạn 2016 - 2020.
          </p>

          <div className="w-full flex flex-col items-center gap-6">
            <img src="/images/application/6.png" className="w-full" />
            <p className="text-[17px] italic">
              (Bộ trưởng Bộ Thương mại Trương Đình Tuyển và Tổng Giám đốc WTO
              Pascal Lamy ký Nghị định thư về việc Việt Nam gia nhập WTO)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
