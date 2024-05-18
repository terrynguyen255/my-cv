import {ProjectStackType} from "../components/projectStack/ProjectStack";
import {mmoment} from "../helpers/timeHelper";

import React from 'react';

const ProjectStatus = {
    BETA: {
        _en: `Beta`,
        _vi: `Bản thử nghiệm người dùng mẫu`,
    },
    PRODUCTION: {
        _en: `Production`,
        _vi: `Đang vận hành trên thị trường`,
    }
}

export const projects = [
    {
        name: 'QUOD AI',
        logo: `${process.env.PUBLIC_URL}/images/project-quodai-logo.png`,
        owner: 'QuodAI Pte',
        about: {
            _en: (
              <div>
                  <p>QUOD AI is an AI tool that helps developers understand their codebase and write better code.</p>
                  <p>QUOD AI analyzes developers' source-code and provide a real-time Stackoverflow-like system where developers can ask it about their code.</p>
                  <p>QUOD AI is also a communication channel where developers know which members they should discuss with to solve their specific problems.</p>
              </div>
            ),
            _vi: (
              <div>
                  <p>QUOD AI là một công cụ sử dụng trí tuệ nhân tạo để giúp lập trình viên hiểu source-code và viết code tốt hơn.</p>
                  <p>QUOD AI phân tích source-code của developer và đưa ra 1 hệ thống câu hỏi tương tự như Stackoverflow để người dùng có thể hỏi về source-code của mình.</p>
                  <p>QUOD AI cũng là 1 kênh giao tiếp nơi developer có thể biết mình cần trao đổi với ai để giải quyết vấn đề cụ thể của mình.</p>
              </div>
            ),
        },
        status: ProjectStatus.PRODUCTION,
        stacks: [
            ProjectStackType.NODEJS,
            ProjectStackType.REACT,
            ProjectStackType.MY_SQL,
            ProjectStackType.ELASTICSEARCH,
            ProjectStackType.DOCKER,
            ProjectStackType.SENTRY,
            ProjectStackType.POSTMAN,
            ProjectStackType.SLACK,
        ],
        teamSize: 9,
        myRoles: [
            {
                name: 'Senior full-stack dev',
                description: ``
            },
        ],
        from: mmoment('2019-11-06'),
        to: mmoment('2021-06-01'),
        photos: [
            {
                title: {
                    _en: 'Overview of your repository',
                    _vi: 'Tổng quan repository',
                },
                subTitle: {
                    _en: `Out-standing tags and answers`,
                    _vi: `Các tag và answer nổi bật`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-quodai-photo-1.png`
            }, {
                title: {
                    _en: 'Details of an answer',
                    _vi: 'Chi tiết của answer',
                },
                subTitle: {
                    _en: `Last change, experts, comments, collections`,
                    _vi: `Thay đổi gần nhất, chuyên gia, bình luận, bộ answers`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-quodai-photo-2.png`
            }, {
                title: {
                    _en: 'Details of an answer',
                    _vi: 'Chi tiết của answer',
                },
                subTitle: {
                    _en: `And related answers`,
                    _vi: `Và các answers liên quan`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-quodai-photo-3.png`
            }, {
                title: {
                    _en: 'Searching your concerns',
                    _vi: 'Tìm kiếm',
                },
                subTitle: {
                    _en: `Search on aspects: code, tags, file, last modified`,
                    _vi: `Trên nhiều thuộc tính của anwser`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-quodai-photo-4.png`
            }, {
                title: {
                    _en: 'Manage members',
                    _vi: 'Thành viên',
                },
                subTitle: {
                    _en: `Invite and manage members`,
                    _vi: `Mời thành viên mới và quản lý thành viên`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-quodai-photo-5.png`
            }
        ],
    },
    {
        name: 'PREDICT IT',
        logo: `${process.env.PUBLIC_URL}/images/project-predictit-logo.png`,
        owner: 'Sibyl Entertainment',
        about: {
            _en: (
                <div>
                    <p>PREDICT IT is an entertainment mobile application in which players can try to predict everything of life.</p>
                    <p>PREDICT IT has a various ways to motivate to predict more such as points, stars, achievements, trophies, leaderboard, social network sharing, etc.</p>
                    <p>PREDICT IT has content team to assure players only interesting predictions.</p>
                    <p>PREDICT IT provide admins a console dashboard to make staff, payouts, contents, season, etc. management simpler than ever.</p>
                </div>
            ),
            _vi: (
                <div>
                    <p>PREDICT IT là một ứng dụng di động cho người chơi thử tài dự đoán kết quả mọi thứ trong cuộc sống.</p>
                    <p>PREDICT IT có nhiều tính năng hấp dẫn khuyến khích người chơi như hệ thống điểm thưởng, tiền thưởng, thành tích, cúp thưởng, bảng xếp hạng, chia sẻ qua mạng xả hội,...</p>
                    <p>PREDICT IT có đội ngũ chịu trách nhiệm nội dung, đảm bảo các chủ đề dự đoán của PREDICT IT đều hấp dẫn và thú vị.</p>
                    <p>PREDICT IT cung cấp trang công cụ quản lý cho quản trị viên giúp việc quản lý nhân viên, chi trả lương, nội dung, mùa giải,... đơn giản hơn bao giờ hết.</p>
                </div>
            ),
        },
        status: ProjectStatus.BETA,
        stacks: [
            ProjectStackType.PYTHON,
            ProjectStackType.POSGRESQL,
            ProjectStackType.CELERY,
            ProjectStackType.DOCKER,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.REACT,
            ProjectStackType.SLACK,
            ProjectStackType.TRELLO,
        ],
        teamSize: 7,
        myRoles: [
            {
                name: 'Backend Team Leader',
                description: ``
            }, {
                name: 'Backend Dev',
                description: ``
            },
        ],
        from: mmoment('2019-1-18'),
        to: mmoment('2019-3-21'),
        photos: [
            {
                title: ``,
                subTitle: {
                    _en: `Choosing interesting categories to start`,
                    _vi: `Lựa chọn các nhóm chủ đề yêu thích để bắt đầu`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-1.jpg`
            }, {
                title: ``,
                subTitle: {
                    _en: `Viewing news feed of predictions`,
                    _vi: `Xem news feed`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-2.jpg`
            }, {
                title: ``,
                subTitle: {
                    _en: `Predicting a prediction`,
                    _vi: `Tham gia dự đoán chủ đề`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-3.png`
            }, {
                title: ``,
                subTitle: {
                    _en: `Revealing rate of predicted answers`,
                    _vi: `Xem gợi ý tỉ lệ dự đoán của những người chơi khác`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-4.jpg`
            }, {
                title: ``,
                subTitle: {
                    _en: `Viewing leaderboard`,
                    _vi: `Xem leaderboard`,
                },
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-5.jpg`
            },
        ],
    },
    {
        name: 'HOME GROUND',
        logo: `${process.env.PUBLIC_URL}/images/project-rovo-logo.png`,
        owner: 'Rovo',
        about: {
            _en: (
                <div>
                    <p>HOME GROUND is an ERP (Enterprise Resource Planning) system that targets Sports Businesses like clubs or sports halls that have physical facilities such as tennis courts, badminton courts, soccer pitches etc.</p>
                    <p>HOME GROUND provides all the technology that a partner needs to run their business effectively with just 10 minutes of setup.</p>
                    <p>HOME GROUND is can be used by clubs worldwide. It supports multi-tenancy and localisation.</p>
                    <p>By now, HOME GROUND has been used by 140+ partners from 7 countries: Singapore, Australia, Switzerland, India, Malaysia, Indonesia and Afghanistan.</p>
                </div>
            ),
            _vi: (
                <div>
                    <p>HOME GROUND hệ thống hoạch định tài nguyên doanh nghiệp (ERP-Enterprise Resource Planning) tập trung vào các doanh nghiệp thể thao, chẳng hạn như các CLB thể thao, nhà thi đấu,...với các cơ sở vật chất sẵn có như: sân banh, tennis, cầu lông,...</p>
                    <p>HOME GROUND mang đến giải pháp công nghệ giúp đối tác có thể vận hành các CLB của mình chỉ trong 10 phút chuẩn bị.</p>
                    <p>HOME GROUND có thể hỗ trợ các đối tác trên toàn cầu bởi tính năng multi-tenancy và localisation.</p>
                    <p>Hiện tại, HOME GROUND đang được sử dụng bởi 140+ đối tác đến 7 quốc gia: Singapore, Australia, Switzerland, India, Malaysia, Indonesia và Afghanistan.</p>
                </div>
            ),
        },
        status: ProjectStatus.PRODUCTION,
        stacks: [
            ProjectStackType.NODEJS,
            ProjectStackType.POSGRESQL,
            ProjectStackType.KILLBILL,
            ProjectStackType.STRIPE_CONNECT,
            ProjectStackType.BULL,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.REACT,
            ProjectStackType.SLACK,
            ProjectStackType.BASECAMP,
        ],
        teamSize: 6,
        myRoles: [
            {
                name: 'Team leader',
                description: ``
            }, {
                name: 'Backend developer',
                description: ``
            }
        ],
        from: mmoment('2018-4-9'),
        to: mmoment('2019-2-12'),
        photos: [
            {
                title: {
                    _en: `Home screen`,
                    _vi: `Màn hình chính`,
                },
                subTitle: {
                    _en: `All modules' shortcuts`,
                    _vi: `Lối vào các chức năng`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-1.png`
            }, {
                title: {
                    _en: `Customers management`,
                    _vi: `Quản lý khách hàng`,
                },
                subTitle: {
                    _en: `Viewing, creating, updating, deleting, filtering, import customers from CSV`,
                    _vi: `Xem, thêm, sửa, xóa, lọc, import khách hàng từ tập tin CSV`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-2.png`
            }, {
                title: {
                    _en: `Memberships management`,
                    _vi: `Quản lý thành viên và gói thành viên`,
                },
                subTitle: {
                    _en: `Viewing, creating, updating, deleting, filtering membership plans`,
                    _vi: `Xem, thêm, sửa, xóa, lọc gói thành viên`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-3.png`
            }, {
                title: {
                    _en: `Ratings & reviews management`,
                    _vi: `Quản lý đánh giá và bình luận từ người dùng`,
                },
                subTitle: {
                    _en: `Reply customers' reviews, view statistics of ratings and reviews`,
                    _vi: `Trả lời bình luận, xem thống kê về đánh giá và bình luận`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-4.png`
            }, {
                title: {
                    _en: `Booking management`,
                    _vi: `Quản lý đặt sân/chỗ`,
                },
                subTitle: {
                    _en: `Booking facility from customer web`,
                    _vi: `Khách hàng đặt sân/chỗ từ web dành cho khách hàng`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-5.png`
            }, {
                title: {
                    _en: `Booking management`,
                    _vi: `Quản lý đặt sân/chỗ`,
                },
                subTitle: {
                    _en: `Manage bookings from admin dashboard`,
                    _vi: `Quản lý đặt sân/chỗ từ web dành cho đối tác`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-6.png`
            }, {
                title: {
                    _en: `Staff management`,
                    _vi: `Quản lý nhân viên`,
                },
                subTitle: {
                    _en: `Viewing, creating, updating, deleting, filtering staff`,
                    _vi: `Xem, thêm, sửa, xóa, lọc nhân viên`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-7.png`
            }, {
                title:{
                    _en: `Email campaigns management`,
                    _vi: `Quản lý chiến dịch email marketing`,
                },
                subTitle:{
                    _en: `Viewing, creating, updating, deleting, running, filtering campaigns`,
                    _vi: `Xem, thêm, sửa, xóa, lọc chiến dịch`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-8.png`
            }, {
                title: {
                    _en: `Statistics`,
                    _vi: `Thống kê`,
                },
                subTitle: {
                    _en: `Rendering statistics for pages views, revenues, reviews`,
                    _vi: `Xem thống kê lượt truy cập, doanh thu, bình luận`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-9.png`
            },
        ],
    },
    {
        name: 'CHỢ TIN TỨC',
        logo: `${process.env.PUBLIC_URL}/images/project-htvNews-logo.png`,
        owner: 'HTV Technology Media Services Ltd.',
        about: {
            _en: (
                <div>
                    <p>CHỢ TIN TỨC (Reporters' Market) is an e-marketplace which targets news, especially breaking-news.</p>
                    <p>CHỢ TIN TỨC is multi-tenancy system. It provide partners (owners of news channels) a management dashboard to sale and buy news, manage their staff and orders.</p>
                    <p>CHỢ TIN TỨC also has an FTP server and a video processing server, so even large HD videos can be uploaded and processed to be sold.</p>
                </div>
            ),
            _vi: (
                <div>
                    <p>CHỢ TIN TỨC là một website chợ điện tử hướng đến đối tượng sản phẩm là tin tức, đặc biệt là các tin nóng.</p>
                    <p>CHỢ TIN TỨC là một hệ thống multi-tenancy. CHỢ TIN TỨC mang đến cho các đối tác một công cụ mua và bán tin tức, quản lý nhân viên và giao dịch của đơn vị.</p>
                    <p>CHỢ TIN TỨC sử dụng FPT server và server để sử lý video, nên ngay cả những video chất lượng cao, dung lượng lớn cũng có thể được upload, xử lý và bán trên CHỢ TIN TỨC.</p>
                </div>
            ),
        },
        status: ProjectStatus.BETA,
        stacks: [
            ProjectStackType.NODEJS,
            ProjectStackType.POSGRESQL,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.REACT,
            ProjectStackType.SLACK,
        ],
        teamSize: 3,
        myRoles: [{
            name: 'Backend developer',
            description: ``
        }],
        from: mmoment('2018-11-01'),
        to: mmoment('2019-05-01'),
        photos: [
            {
                title: {
                    _en: `Home screen`,
                    _vi: `Trang chủ`,
                },
                subTitle: ``,
                src:`${process.env.PUBLIC_URL}/images/project-htvNews-photo-1.png`
            }, {
                title: {
                    _en: `Dashboard for partners`,
                    _vi: `Trang quản lý của đối tác`,
                },
                subTitle: {
                    _en: `Adding a news into cart`,
                    _vi: `Thêm tin vào giỏ hàng`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvNews-photo-2.png`
            }, {
                title: {
                    _en: `Dashboard for partners`,
                    _vi: `Trang quản lý của đối tác`,
                },
                subTitle: {
                    _en: `Confirming an order by OTP`,
                    _vi: `Xác nhận mua tin bằng mã OTP`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvNews-photo-3.png`
            }, {
                title: {
                    _en: `Dashboard for partners`,
                    _vi: `Trang quản lý của đối tác`,
                },
                subTitle: {
                    _en: `Staff management`,
                    _vi: `Quản lý nhân viên`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvNews-photo-4.png`
            },{
                title: {
                    _en: `Dashboard for admin`,
                    _vi: `Trang quản lý của quản trị viên`,
                },
                subTitle: {
                    _en: `Partners management`,
                    _vi: `Quản lý đối tác`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvNews-photo-5.png`
            },
        ],
    },
    {
        name: 'LỊCH HTV',
        logo: `${process.env.PUBLIC_URL}/images/project-htvCalendar-logo.jpg`,
        owner: 'HTV Technology Media Services Ltd.',
        about: {
            _en: (
                <div>
                    <p>LỊCH HTV (Calendar for HTV TV channel) is a system which broadcasts HTV channel's program schedule and events to their audiences.</p>
                    <p>LỊCH HTV provides the channel audiences an mobile application, which audiences can see broadcasted schedule/events. Besides, audiences also can create their own events or save HTV channel's events to be notified later.</p>
                    <p>For admins of HTV channel, LỊCH HTV provide them a dashboard to manage program schedule and events.</p>
                    <p></p>
                </div>
            ),
            _vi: (
                <div>
                    <p>LỊCH HTV là hệ thống thông báo lịch phát sóng và sự kiện của nhóm đài HTV đến khán giả của đài.</p>
                    <p>LỊCH HTV mang đến cho các khán giả một ứng dụng di động để cập nhật lịch phát sóng và sự kiện của đài. Bên cạnh đó, LỊCH HTV còn cho phép người dùng tạo ra các sự kiện cá nhân hoặc lưu các sự kiện của đài để được ứng dụng nhắc nhở khi sự kiện sắp diễn ra.</p>
                    <p>Đối với quản trị viên của đài, LỊCH HTV cung cấp một website quản lý để quản lý sự kiện và lịch phát sóng.</p>
                    <p></p>
                </div>
            ),
        },
        status: ProjectStatus.PRODUCTION,
        stacks: [
            ProjectStackType.NODEJS,
            ProjectStackType.POSGRESQL,
            ProjectStackType.SENTRY,
            ProjectStackType.POSTMAN,
            ProjectStackType.REACT,
            ProjectStackType.REACT_NATIVE,
            ProjectStackType.SLACK,
        ],
        teamSize: 2,
        myRoles: [{
            name: 'Backend developer',
            description: ``
        }],
        from: mmoment('2018-09-14'),
        to: mmoment('2019-4-4'),
        photos: [
            {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Home screen`,
                    _vi: `Màn hình chính`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-1.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Trailers of new programs`,
                    _vi: `Xem trailer các chương trình mới`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-2.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Events`,
                    _vi: `Sự kiện`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-3.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Program schedule`,
                    _vi: `Lịch phát sóng`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-4.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Calendar`,
                    _vi: `Lịch`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-5.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Creating new event`,
                    _vi: `Tạo sự kiện mới`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-6.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Creating new event`,
                    _vi: `Tạo sự kiện mới`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-7.jpg`
            }, {
                title: {
                    _en: `Users application`,
                    _vi: `Ứng dụng của người dùng`,
                },
                subTitle: {
                    _en: `Creating new event`,
                    _vi: `Tạo sự kiện mới`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-8.jpg`
            }, {
                title: {
                    _en: `Admins dasboard`,
                    _vi: `Trang quản lý của quản trị viên`,
                },
                subTitle: {
                    _en: `Events management`,
                    _vi: `Quản lý sự kiện`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-9.png`
            }, {
                title: {
                    _en: `Admins dasboard`,
                    _vi: `Trang quản lý của quản trị viên`,
                },
                subTitle: {
                    _en: `Programs schedule management`,
                    _vi: `Quản lý lịch chiếu`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-10.png`
            },
        ],
    },
    {
        name: 'IURA',
        logo: `${process.env.PUBLIC_URL}/images/project-iura-logo.png`,
        owner: 'Rockship Ltd.',
        about: {
            _en: (
                <div>
                    <p>IURA is a pioneering application which provides an end-to-end connectivity solutions between customers and lawyers.</p>
                    <p>The outstanding advantages that IURA brings to customers are:</p>
                    <ul>
                        <li>Professional lawyers - with full qualifications, certificates - who will give customers the most reliable advices.</li>
                        <li>A clear, transparent, minimized costs and time savings way to connect to pofessional lawyers.</li>
                        <li>Diverse languages of counsel in addition to Vietnamese such as English, French, Chinese, Japanese, etc. helping to better facilitate customers' dialogue.</li>
                    </ul>
                    <p>Besides, IURA provides lawyers:</p>
                    <ul>
                        <li>An effective and time saving solution to connect customers.</li>
                        <li>A tool to manage their business simpler than ever.</li>
                    </ul>
                </div>
            ),
            _vi: (
                <div>
                    <p>IURA là một ứng dụng tiên phong mang đến giải kết nối luật sư và thân chủ.</p>
                    <p>Những tính năng nổi bật mà IURA mang lại cho thân chủ:</p>
                    <ul>
                        <li>Những luật sư chuyên nghiệp, có đầy đủ bằng cấp và chứng chỉ hành nghề - Sẽ đưa ra những tư vấn chính xác và đáng tin cậy nhất.</li>
                        <li>Một giải pháp minh bạch, tiết kiệm chi phí và thời gian để kết nối với luật sư.</li>
                        <li>Hỗ trợ đa dạng các ngôn ngữ: tiếng Việt, Anh, Pháp, Hoa, Nhật,.... giúp khách hàng có thể trao đổi với luật sư phù hợp.</li>
                    </ul>
                    <p>Bên cạnh đó IURA mang đến cho luật sư:</p>
                    <ul>
                        <li>Một giải pháp hiệu quả và tiết kiệm thời gian để tiếp cận các thân chủ.</li>
                        <li>Một công cụ để quản lý công việc đơn giản hơn bao giờ hết.</li>
                    </ul>
                </div>
            ),
        },
        status: ProjectStatus.PRODUCTION,
        stacks: [
            ProjectStackType.PYTHON,
            ProjectStackType.POSGRESQL,
            ProjectStackType.SINCH,
            ProjectStackType.ONE_SIGNAL,
            ProjectStackType.ONE_PAY,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.SLACK,
        ],
        teamSize: 5,
        myRoles: [{
            name: 'Backend developer',
            description: ``
        }],
        from: mmoment('2017-9-9'),
        to: mmoment('2018-4-1'),
        photos: [
            {
                title: {
                    _en: `Customer application`,
                    _vi: `Ứng dụng dành cho thân chủ`,
                },
                subTitle: {
                    _en: `Choosing desired practice area for a quick call`,
                    _vi: `Chọn lĩnh vực muốn tư vấn để bắt đầu cuộc gọi`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-01.jpeg`
            }, {
                title: {
                    _en: `Customer application`,
                    _vi: `Ứng dụng dành cho thân chủ`,
                },
                subTitle: {
                    _en: `System is finding matched lawyer for the quick call`,
                    _vi: `Hệ thống đang tìm kiếm luật sư phù hợp`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-02.jpeg`
            }, {
                title: {
                    _en: `Customer application`,
                    _vi: `Ứng dụng dành cho thân chủ`,
                },
                subTitle: {
                    _en: `System found a lawyer for the quick call`,
                    _vi: `Hệ thống đã tìm thấy luật sư phù hợp`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-03.jpeg`
            }, {
                title: {
                    _en: `Customer application`,
                    _vi: `Ứng dụng dành cho thân chủ`,
                },
                subTitle: {
                    _en: `Filtering lawyers`,
                    _vi: `Tìm kiếm luật sư theo các tiêu chí`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-04.jpeg`
            }, {
                title: {
                    _en: `Customer application`,
                    _vi: `Ứng dụng dành cho thân chủ`,
                },
                subTitle: {
                    _en: `Viewing lawyer profile`,
                    _vi: `Xem hồ sơ cá nhân của luật sư`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-05.jpeg`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Home screen`,
                    _vi: `Màn hình chính`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-06.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Profile management`,
                    _vi: `Quản lý hồ sơ cá nhân`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-07.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Packages management`,
                    _vi: `Quản lý gói tư vấn`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-08.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Package detail`,
                    _vi: `Chi tiết một gói tư vấn`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-09.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `A client is requesting for a quick call`,
                    _vi: `Có thân chủ đang yêu cầu kết nối`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-10.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `In a quick call`,
                    _vi: `Cuộc gọi tư vấn đang diễn ra`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-11.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Quick call transaction`,
                    _vi: `Chi tiết giao dịch của cuộc gọi tư vấn`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-12.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Notifications management`,
                    _vi: `Quản lý thông báo`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-13.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Payouts info`,
                    _vi: `Thông tin thanh toán`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-14.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Client profile`,
                    _vi: `Hồ sơ cá nhân của thân chủ`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-15.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Engagements management`,
                    _vi: `Quản lý các gói tư vấn đã được mua`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-16.png`
            }, {
                title: {
                    _en: `Lawyer application`,
                    _vi: `Ứng dụng dành cho luật sư`,
                },
                subTitle: {
                    _en: `Quick calls history`,
                    _vi: `Lịch sử các cuộc gọi tư vấn`,
                },
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-17.png`
            },
        ],
    },
    // {
    //     name: ``,
    //     logo: `${process.env.PUBLIC_URL}/images/project-xxx-logo.png`,
    //     owner: ``,
    //     about: {
    //         _en: ``,
    //         _vi: ``,
    //     },
    //     status: {
    //         _en: ``,
    //         _vi: ``,
    //     },
    //     stacks: [],
    //     teamSize: 111,
    //     myRoles: [{
    //         name: ``,
    //         description: ``
    //     }],
    //     from: mmoment('2018-4-9'),
    //     to: mmoment('2018-4-9'),
    //     photos: [
    //         {
    //             title: {
    //                 _en: ``,
    //                 _vi: ``,
    //             },
    //             subTitle: {
    //                 _en: ``,
    //                 _vi: ``,
    //             },
    //             src:`${process.env.PUBLIC_URL}/images/project-xxxxx-photo-xxxxxx.xxx`
    //         },
    //     ],
    // },
]
