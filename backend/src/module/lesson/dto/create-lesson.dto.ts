import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TYPES } from 'src/utils/constants';

export class CreateLessonDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Id of courses',
    example: '8ac18ed9-4dfd-4cd1-a24a-7cf50cf3e524',
  })
  courseId: string;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'name of lesson',
    example: 'Phương pháp Scaffolding và cách áp dụng trong việc học tiếng Anh',
  })
  name: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'description of lesson',
    example:
      'Phương pháp Scaffolding là gì và làm sao để áp dụng nó một cách hiệu quả trong việc học Tiếng Anh? Hãy cùng tìm hiểu chi tiết hơn trong bài viết dưới đây của STUDY4!',
  })
  description: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'content of lesson, format HTML string',
    example:
      '<div id="post-content" class="post-content md-content js-toc-content" prewrap="">\\n<p><img alt="Phương pháp Scaffolding là gì? cách áp dụng Scaffolding trong việc học tiếng Anh" src="/media/uploads/editor/hangbm.study4/2024/11/28/cach-dung-12.png" style="height:674px; width:1200px"></p>\\n\\n<p>Ngoài những phương pháp học Tiếng Anh phổ biến như <a href="https://study4.com/posts/803/huong-dan-ap-dung-phuong-phap-pomodoro-trong-hoc-ielts/"><strong>Pomodoro</strong></a>, Problem-Based Learning hay The Case Method, Scaffolding cũng là một phương pháp hiệu quả mà bạn có thể áp dụng vào tự học tiếng Anh và ôn luyện IELTS dễ dàng. Để các bạn có cái nhìn rõ hơn về phương pháp Scaffolding, hãy cùng STUDY4 tìm hiểu chi tiết qua bài viết dưới đây nhé!</p>\\n\\n<h2><strong>I. Phương pháp Scaffolding là gì?</strong></h2>\\n\\n<p>Trong tiếng Anh, "Scaffolding" mang nghĩa là giàn giáo - một công cụ thường được sử dụng trong xây dựng để hỗ trợ công nhân làm việc ở các vị trí cao hơn mặt đất. Tuy nhiên, trong lĩnh vực giáo dục, "Scaffolding" cũng chỉ một phương pháp giảng dạy sáng tạo và hiệu quả, được biết đến với tên đầy đủ là Vygotsky Scaffolding.</p>\\n\\n<p>Vậy phương pháp giáo dục Scaffolding cụ thể là gì? Đây là một phương pháp trong đó giáo viên cung cấp các hỗ trợ cụ thể giúp học sinh hiểu và áp dụng kiến thức hoặc kỹ năng mới. Theo quan điểm giáo dục của Vygotsky, trong mô hình Scaffolding, giáo viên sẽ giới thiệu kiến thức mới hoặc hướng dẫn cách giải quyết một vấn đề, sau đó giảm dần sự hỗ trợ để học sinh có thể tự thực hành nhóm và cá nhân.</p>\\n\\n<p style="text-align:center"><img alt="Phương pháp Scaffolding là gì?" src="https://img.freepik.com/free-vector/scaffold-concept-illustration_114360-6964.jpg" style="height:300px; width:300px"></p>\\n\\n<p style="text-align:center"><em>Phương pháp Scaffolding là gì?</em></p>\\n\\n<p>Phương pháp Scaffolding thường được diễn đạt ngắn gọn qua ba bước: “Tôi làm. Chúng tôi làm. Bạn làm”. Trong tiến trình này, giáo viên đầu tiên thực hiện mẫu cho học sinh xem, sau đó cả lớp cùng thực hành, và cuối cùng, học sinh tự thực hành một mình. Đây là một phương pháp học tập lấy người học làm trung tâm (Learner-centered approach), và hiện đang được áp dụng rộng rãi trên toàn thế giới.</p>\\n\\n<h2><strong>II. Lợi ích của phương pháp Scaffolding</strong></h2>\\n\\n<ul>\\n\\t<li style="list-style-type:disc"><strong>Tập trung vào người học: </strong>Phương pháp Scaffolding tập trung vào học viên, chú trọng vào việc thiết kế các hoạt động học tập phù hợp với khả năng và nhu cầu riêng của từng người. Điều này giúp học viên cảm thấy được quan tâm và nhận sự hỗ trợ, từ đó nâng cao hiệu quả học tập.</li>\\n\\t<li style="list-style-type:disc"><strong>Xây dựng môi trường học tập tích cực: </strong>Scaffolding giúp người học tự tin hơn, giảm bớt lo lắng về thất bại trong quá trình học. Nhờ vào sự hỗ trợ liên tục, học viên có thể vượt qua khó khăn, tạo ra môi trường học tập tích cực, tăng cường hứng thú và thúc đẩy sự tiến bộ. Phương pháp này cũng làm giảm áp lực khi học viên có sự đồng hành của giáo viên trong từng bước của hành trình học tập.</li>\\n\\t<li style="list-style-type:disc"><strong>Phát triển kỹ năng tự học: </strong>Nhờ vào sự hỗ trợ của phương pháp Scaffolding, người học có thể cải thiện khả năng tự học và nâng cao trình độ tiếng Anh. Họ sẽ biết cách áp dụng những kiến thức đã học để học hiệu quả hơn và đạt được mục tiêu học tập cá nhân.</li>\\n\\t<li style="list-style-type:disc"><strong>Scaffolding dựa trên vùng phát triển gần (ZPD) của học viên:</strong>&nbsp;Tức là khoảng cách giữa những kiến thức họ đã nắm được và những điều cần học thêm. Phương pháp này xây dựng một môi trường học nơi giáo viên cung cấp sự hỗ trợ và hướng dẫn cần thiết, giúp người học tiếp thu kiến thức dễ dàng hơn. Giáo viên sẽ bắt đầu với những kiến thức cơ bản và dần nâng cao độ khó của các hoạt động học tập, đồng thời đưa ra phản hồi, hướng dẫn xuyên suốt để học viên có thể tiếp cận và hiểu sâu hơn.</li>\\n</ul>\\n\\n<h2><strong>III. Các kiểu phương pháp Scaffolding</strong></h2>\\n\\n<p style="text-align:center"><img alt="Các kiểu phương pháp Scaffolding" src="/media/uploads/editor/hangbm.study4/2024/11/28/image.png" style="height:300px; width:501px"></p>\\n\\n<p style="text-align:center"><em>Các kiểu phương pháp Scaffolding</em></p>\\n\\n<p>Phương pháp Scaffolding có thể được phân loại dựa trên các công cụ hỗ trợ mà giáo viên sử dụng, gồm ba loại chính: giác quan, đồ họa và tương tác. Tùy theo mục tiêu, nội dung bài học và đặc điểm học sinh, giáo viên có thể chọn một loại hoặc kết hợp nhiều loại phương pháp để tối ưu hóa quá trình giảng dạy. Cụ thể như sau:</p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc"><strong>Phương pháp giác quan</strong> bao gồm việc giáo viên sử dụng các yếu tố hình ảnh và vật lý trong lớp học, kết hợp với các hoạt động trực quan và thao tác cụ thể. Phương pháp này còn bao gồm việc giáo viên thực hiện mẫu trước lớp nhằm mang lại một bức tranh tổng thể về nội dung bài học.</li>\\n\\t<li style="list-style-type:disc"><strong>Phương pháp đồ họa</strong> áp dụng các công cụ như bản đồ tư duy, bảng biểu đồ họa, và bảng neo để giúp học sinh nhận biết mối liên hệ giữa các ý tưởng và kiến thức, hỗ trợ kỹ năng đọc hiểu hiệu quả.</li>\\n\\t<li style="list-style-type:disc"><strong>Phương pháp tương tác</strong> đóng vai trò quan trọng trong các lớp học tiếng Anh giao tiếp, bao gồm sự giao tiếp giữa giáo viên và học sinh hoặc giữa các học sinh với nhau. Các phương pháp như "suy nghĩ - cặp đôi - chia sẻ" hay làm việc nhóm là những chiến lược được áp dụng một cách hiệu quả.</li>\\n</ul>\\n\\n<p>Theo các nghiên cứu, việc áp dụng các hình thức Scaffolding này mang lại lợi ích tích cực trong quá trình học tập, đặc biệt giúp học tiếng Anh đạt hiệu quả cao cả về mục tiêu lẫn nội dung.</p>\\n\\n<h2><strong>IV. Quy trình áp dụng phương pháp Scaffolding trong việc học tiếng Anh</strong></h2>\\n\\n<p style="text-align:center"><img alt="phương pháp Scaffolding trong việc học tiếng Anh" src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359356.jpg" style="height:333px; width:500px"></p>\\n\\n<p style="text-align:center"><em>Quy trình áp dụng phương pháp Scaffolding trong việc học tiếng Anh</em></p>\\n\\n<p>Quy trình áp dụng phương pháp Scaffolding trong giảng dạy tiếng Anh cho giáo viên có thể được thực hiện theo các bước sau:</p>\\n\\n<p><span style="font-size:18px"><strong>Bước 1: Xác định mục tiêu học tập rõ ràng</strong></span></p>\\n\\n<p>Giáo viên cần xác định các kỹ năng hoặc kiến thức mà học sinh cần đạt được sau buổi học, ví dụ như mục tiêu của lớp học hôm đó là nắm vững các câu điều kiện trong tiếng Anh.</p>\\n\\n<p><span style="font-size:18px"><strong>Bước 2: Phân chia nhiệm vụ thành các bước nhỏ và dễ tiếp cận</strong></span></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Chia nhỏ bài học: Chia nhỏ bài học hoặc nhiệm vụ lớn thành các bước hoặc phần đơn giản hơn. Ví dụ: khi dạy về <a href="https://study4.com/posts/640/cau-dieu-kien-cong-thuc-cach-dung-va-cac-bai-tap/"><strong>câu điều kiện</strong></a>, giáo viên có thể dạy về từng loại câu điều kiện riêng biệt, bắt đầu từ câu điều kiện loại 0 đến loại 2.</li>\\n\\t<li style="list-style-type:disc">Ưu tiên phần kiến thức cơ bản trước: Bắt đầu với những phần dễ hiểu, đơn giản và sau đó dần dần nâng cao độ khó khi học sinh đã nắm vững kiến thức nền tảng.</li>\\n</ul>\\n\\n<p><span style="font-size:18px"><strong>Bước 3: Giới thiệu và minh họa bài học</strong></span></p>\\n\\n<p>Đầu tiên, giáo viên có thể cung cấp đoạn hội thoại về kinh nghiệm du lịch, ví dụ như "If I visited Paris, I would go with my best friends." Từ ví dụ thực tế kèm hình ảnh, video minh hoạ đó, giáo viên sẽ giải thích công thức và cách sử dụng. Ví dụ, sử dụng quá khứ đơn trong câu điều kiện ở mệnh đề if cần chú ý điều gì.</p>\\n\\n<p><span style="font-size:18px"><strong>Bước 4: Cung cấp hỗ trợ ban đầu (High Support)</strong></span></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Hướng dẫn từng bước: Giáo viên nên làm mẫu bài tập hoặc câu hỏi mẫu trước, sau đó hướng dẫn học sinh thực hành từng bước. Ví dụ, khi dạy viết đoạn văn, giáo viên có thể cùng học sinh viết câu đầu tiên, gợi ý các câu tiếp theo.</li>\\n\\t<li style="list-style-type:disc">Sử dụng các công cụ hỗ trợ học tập: Sử dụng các bảng từ vựng, bản đồ tư duy (mind maps), hay biểu đồ cấu trúc câu để giúp học sinh ghi nhớ và hiểu sâu hơn.</li>\\n\\t<li style="list-style-type:disc">Thực hành mẫu: Giáo viên có thể thực hiện các bài tập mẫu để học sinh nắm vững quy trình trước khi tự làm.</li>\\n</ul>\\n\\n<p><span style="font-size:18px"><strong>Bước 5: Tăng cường sự tương tác và khuyến khích phản hồi</strong></span></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Hỏi và trả lời: Khuyến khích học sinh đặt câu hỏi nếu họ gặp khó khăn hoặc chưa hiểu. Giáo viên cũng có thể hỏi để kiểm tra hiểu biết của học sinh, như: “<a href="https://study4.com/posts/782/cau-dieu-kien-loai-2-cau-truc-cach-dung-va-bai-tap-co-dap-an/"><strong>Câu điều kiện loại 2</strong></a> dùng để diễn tả điều gì?”</li>\\n\\t<li style="list-style-type:disc">Thảo luận nhóm: Khuyến khích học sinh trao đổi với nhau trong nhóm để xây dựng ý tưởng, thực hành giao tiếp và chia sẻ ý kiến.</li>\\n</ul>\\n\\n<p style="text-align:center"><img alt="cách áp dụng Scaffolding " src="https://img.freepik.com/free-vector/hand-drawn-flat-design-book-club-illustration_23-2149330409.jpg" style="height:266px; width:400px"></p>\\n\\n<p><span style="font-size:18px"><strong>Bước 6: Giảm dần sự hỗ trợ (Low Support)</strong></span></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Đặt câu hỏi gợi mở: Khi học sinh bắt đầu tự tin hơn, giáo viên có thể đặt câu hỏi gợi mở thay vì đưa ra câu trả lời ngay, để học sinh tự tư duy và phát triển ý kiến của mình.</li>\\n\\t<li style="list-style-type:disc">Động viên học sinh tự sửa lỗi: Khi học sinh làm sai, thay vì chỉ ra lỗi ngay lập tức, giáo viên có thể yêu cầu học sinh tự rà soát lại và suy nghĩ cách sửa. Nếu học sinh chưa thể tìm ra lỗi sai, giáo viên cũng cần đưa ra phản hồi cụ thể về lỗi sai của học sinh để học sinh nhận biết được hướng đi đúng cho bài làm.</li>\\n\\t<li style="list-style-type:disc">Chuyển dần sang vai trò giám sát: Giáo viên sẽ giảm dần việc can thiệp và chỉ đứng ngoài quan sát, hỗ trợ khi thực sự cần thiết, để học sinh có thể tự thực hiện bài tập hoặc các tình huống thực hành.</li>\\n</ul>\\n\\n<p><span style="font-size:18px"><strong>Bước 7: Đánh giá và củng cố kiến thức</strong></span></p>\\n\\n<p>Giáo viên có thể đặt câu hỏi kiểm tra hoặc yêu cầu học sinh làm bài tập để đánh giá mức độ hiểu biết của họ. Nếu cần, giáo viên có thể quay lại và hỗ trợ các bước trước đó. Đồng thời, giáo viên nên khuyến khích học sinh tự học bằng cách cung cấp tài liệu tham khảo hoặc hướng dẫn cách tự học, chẳng hạn như cách sử dụng từ điển hoặc tìm kiếm tài liệu tiếng Anh trực tuyến.</p>\\n\\n<p><span style="font-size:18px"><strong>Bước 8: Rút lui sự hỗ trợ hoàn toàn</strong></span></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Để học sinh tự hoàn thành bài tập: Khi học sinh đã có thể tự hoàn thành bài tập một cách độc lập, giáo viên có thể rút lui hoàn toàn sự hỗ trợ và khuyến khích học sinh tự tin sử dụng tiếng Anh trong các tình huống thực tế.</li>\\n\\t<li style="list-style-type:disc">Củng cố kiến thức qua bài tập độc lập: Yêu cầu học viên viết về các trải nghiệm của họ bằng câu điều kiện<em> </em>trong một đoạn văn ngắn.</li>\\n</ul>\\n\\n<p>Các bước thực hiện phương pháp Scaffolding đối với học viên sẽ được tiến hành như sau:</p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc"><strong>Bước 1: </strong>Giới thiệu sơ lược về chủ đề bài học.</li>\\n\\t<li style="list-style-type:disc"><strong>Bước 2: </strong>Chia nhỏ nội dung bài học thành các phần riêng biệt, theo các “category” khác nhau.</li>\\n\\t<li style="list-style-type:disc"><strong>Bước 3:</strong> Giáo viên hướng dẫn học viên về cách tiếp cận chủ đề bài học.</li>\\n\\t<li style="list-style-type:disc"><strong>Bước 4: </strong>Học viên bắt đầu vận dụng những kiến thức đã có và áp dụng những chỉ dẫn của giảng viên để giải quyết chủ đề.</li>\\n\\t<li style="list-style-type:disc"><strong>Bước 5:</strong> Nếu học viên gặp khó khăn hoặc chưa hiểu cách giải quyết, giáo viên sẽ hỗ trợ để học viên có thể tiếp tục tự tìm ra giải pháp và đi đến kết luận cuối cùng của bài học.</li>\\n</ul>\\n\\n<p><em><strong>Ví dụ cụ thể:</strong></em></p>\\n\\n<p><em><strong>Bước 1: </strong>Giới thiệu chủ đề học về "Health and Fitness" (Sức khỏe và Thể hình)</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Giới thiệu chủ đề: Giáo viên bắt đầu bằng cách thảo luận về tầm quan trọng của sức khỏe và thể hình trong cuộc sống hàng ngày, những lợi ích của việc duy trì lối sống lành mạnh và thể dục đều đặn.</li>\\n\\t<li style="list-style-type:disc">Mục tiêu bài học: Học viên sẽ học cách sử dụng từ vựng về sức khỏe, thể hình, thói quen ăn uống lành mạnh, và cách đưa ra lời khuyên về cách duy trì sức khỏe tốt.</li>\\n</ul>\\n\\n<p><em><strong>Bước 2: </strong>Phân chia nội dung thành các mảng nhỏ hơn</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Các chủ đề con:\\n\\t<ul>\\n\\t\\t<li style="list-style-type:circle">Các loại hình thể dục phổ biến: Yoga, chạy bộ, bơi lội, gym, v.v.</li>\\n\\t\\t<li style="list-style-type:circle">Chế độ ăn uống lành mạnh: Các loại thực phẩm tốt cho sức khỏe, chế độ ăn cân bằng, uống nước đầy đủ.</li>\\n\\t\\t<li style="list-style-type:circle">Các vấn đề sức khỏe phổ biến: Cảm cúm, đau lưng, căng thẳng, béo phì.</li>\\n\\t\\t<li style="list-style-type:circle">Cách đưa ra lời khuyên về sức khỏe: “You should eat more vegetables,” “It’s important to exercise regularly.”</li>\\n\\t</ul>\\n\\t</li>\\n</ul>\\n\\n<p><em><strong>Bước 3: </strong>Giáo viên hướng dẫn học viên</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Đọc tài liệu về sức khỏe và thể hình: Giáo viên cung cấp các bài đọc về lợi ích của thể dục và chế độ ăn uống lành mạnh, kèm theo từ vựng mới như “balanced diet,” “regular exercise,” “mental health,” và các động từ như “improve,” “maintain,” “reduce.”</li>\\n\\t<li style="list-style-type:disc">Câu hỏi mẫu để thảo luận: Giáo viên đưa ra các câu hỏi như: “What kind of exercise do you enjoy the most?”, “How can we stay healthy?”, “What is your daily routine for staying fit?”</li>\\n</ul>\\n\\n<p><img alt="scaffolding techniques" src="https://img.freepik.com/premium-vector/study-group-friends-flat-illustration_418302-159.jpg?semt=ais_hybrid" style="height:300px; width:300px"></p>\\n\\n<p><em><strong>Bước 4: </strong>Học viên áp dụng kiến thức</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Tạo thói quen tập luyện: Học viên sẽ nói về thói quen thể dục của bản thân, miêu tả các hoạt động thể dục yêu thích và lý do tại sao họ chọn chúng. Ví dụ: “I enjoy running because it helps me stay fit and feel relaxed.”</li>\\n\\t<li style="list-style-type:disc">Thảo luận về chế độ ăn uống: Học viên có thể chia sẻ về chế độ ăn uống của mình, liệt kê những món ăn lành mạnh mà họ thích và thảo luận về các lựa chọn thực phẩm tốt cho sức khỏe.</li>\\n</ul>\\n\\n<p><em><strong>Bước 5: </strong>Giáo viên hỗ trợ trong quá trình thảo luận</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Giải đáp thắc mắc: Khi học viên gặp khó khăn trong việc sử dụng từ vựng hoặc cấu trúc câu, giáo viên sẽ đưa ra các gợi ý hoặc sửa lỗi cho học viên. Ví dụ, nếu học viên không biết cách diễn đạt "Chế độ ăn uống lành mạnh," giáo viên có thể giải thích và cung cấp ví dụ: “A balanced diet includes vegetables, fruits, and whole grains.”</li>\\n\\t<li style="list-style-type:disc">Khuyến khích học viên tự sửa lỗi: Trong khi thảo luận, giáo viên có thể yêu cầu học viên lắng nghe và nhận xét về lỗi của mình hoặc của bạn học, ví dụ như: “Can you try to say this in a more complete sentence?”</li>\\n</ul>\\n\\n<p><em><strong>Bước 6: </strong>Học viên thực hành độc lập</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Viết bài về chế độ ăn uống và tập luyện: Sau khi thảo luận, học viên sẽ viết một đoạn văn miêu tả chế độ ăn uống và các hoạt động thể dục mà họ thực hiện để duy trì sức khỏe. Giáo viên sẽ cung cấp gợi ý về cách cấu trúc đoạn văn. Ví dụ: “I eat vegetables every day, and I exercise three times a week. I believe this helps me stay healthy and energetic.”</li>\\n\\t<li style="list-style-type:disc">Câu hỏi và trả lời: Học viên sẽ tạo ra các câu hỏi về sức khỏe và thể hình để hỏi bạn học, ví dụ: “What do you do to stay healthy?” và trả lời những câu hỏi đó.</li>\\n</ul>\\n\\n<p><em><strong>Bước 7: </strong>Đánh giá và củng cố kiến thức</em></p>\\n\\n<ul>\\n\\t<li style="list-style-type:disc">Giáo viên cung cấp phản hồi: Giáo viên sẽ đọc và sửa lỗi bài viết của học viên, cung cấp phản hồi về ngữ pháp, từ vựng, và cách diễn đạt. Giáo viên có thể gợi ý học viên cách làm bài viết trở nên mạch lạc và tự nhiên hơn.</li>\\n\\t<li style="list-style-type:disc">Ôn tập và thực hành thêm: Học viên sẽ tham gia vào các hoạt động ôn tập, như chơi trò chơi từ vựng về sức khỏe, hoặc tham gia vào các cuộc thi thảo luận nhóm để củng cố kiến thức đã học.</li>\\n</ul>\\n\\n<h2><strong>Lời kết</strong></h2>\\n\\n<p>Hy vọng rằng các kiến thức về phương pháp Scaffolding sẽ giúp bạn học tập hiệu quả, hỗ trợ quá trình ôn luyện tiếng Anh và đạt được kết quả cao trong kỳ thi IELTS. Để chinh phục band điểm IELTS như mong muốn, đừng quên áp dụng ngay những phương pháp này trong quá trình luyện thi của mình nhé!</p>\\n                        </div>',
  })
  content: string;

  @AutoMap()
  @IsEnum(TYPES)
  @IsNotEmpty()
  @ApiProperty({
    enum: TYPES,
    description: 'type of lesson',
    example: TYPES.READING,
  })
  type: TYPES;
}
