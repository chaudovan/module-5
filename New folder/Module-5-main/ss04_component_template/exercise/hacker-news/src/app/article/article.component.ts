import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Đề xuất dừng thu phí ôtô đậu dưới lòng đường',
      url: 'https://vnexpress.net/de-xuat-dung-thu-phi-oto-dau-duoi-long-duong-4500026.html'
    },
    {
      title: 'Mỹ khát lao động',
      url: 'https://vnexpress.net/my-khat-lao-dong-4499575.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Chàng trai đưa hình ảnh đại dương vào đèn ngủ',
      url: 'https://video.vnexpress.net/'
    },
    {
      title: 'Ấn Độ không thể dự giải giao hữu ở Việt Nam',
      url: 'https://vnexpress.net/an-do-khong-the-du-giai-giao-huu-o-viet-nam-4500174.html'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
