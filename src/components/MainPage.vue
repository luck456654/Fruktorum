<template>
  <body>
    <header className="header">
      <img src="Logo.png" className="header__logo" />
    </header>
    <main>
      <div v-for="item in mainStore.data.body" :key="item.id">
        <section v-if="item.type == 'article_intro_block'">
          <div className="container aboutus">
            <div className="container__leftmainfoto">
              <img :src="item.data.image" className="container__mainfoto" />
            </div>
            <div className="container__righttitle">
              <h1 className="h1">{{ item.data.title }}</h1>
              <div className="container__rtext"><img src="icontime.png" className="container____icontime" /><span
                  className="container__textmore">{{ item.data.reading_time }} мин время чтения</span></div>
              <div className="container__rtext"><img src="iconsee.png" className="container____icontime" /><span
                  className="container__textmore">{{ item.data.views_count }} прочитали статью</span></div>
              <div className="container__rdesk">{{ item.data.short_description }}</div>
            </div>
          </div>
        </section>
        </div>
        <div v-for="item in mainStore.data.body" :key="item.id">
        <section  v-if="(item.type == `text_block`)&&(item.id==='10b951d3-d595-4776-b85f-7e6ba5d8818e')" className="container flexc techn" v-html ="item.data">           
        </section>
        </div>
        <div v-for="item in mainStore.data.body" :key="item.id">
        <section v-if="item.type == 'image_block'" className="container flexc prir">
          <img :src="item.data.src" :alt="item.data.caption" className="prir__paint"/>
        </section>
        </div>
        <section v-for="item in mainStore.data.body" :key="item.id" className="container after flexc">
          <section  v-if="(item.type == `text_block`)&&(item.id==='1d070b6c-8848-4b76-8197-b581b3098f17')" className="container flexc techn" v-html ="item.data">           
        </section>
        </section>
        <div v-for="item in mainStore.data.body" :key="item.id">
        <section  v-if="item.type == `slider_block`" className="container">
          <swiper class="mySwiper">
            <swiper-slide v-for="slide in item.data"><img :src="slide"></swiper-slide>
                    </swiper>
        </section>
        </div>
        <section className="container flexc subscription">
          <div className="subscription__cont">
            <div className="subscription__form">
              <div className="textstrong">Подпишись на рассылку</div>
              <div class="subscription__formmain">
                <input className="inputsb" placeholder="Email">
                <button class="btn btnsb">Подписаться</button>
              </div>
            </div>
          </div>
        </section>
     
       <div v-for="items in mainStore.data.body">
        <section  v-if="(items.type == `article_list_block`)" className="container flexc">
          <div>
            <h2 className="posts">{{ items.data.title }}</h2>
             <div class="flexr">
             <div v-for="card in items.data.articles" className="postCard">
                 <img :src="card.image" className="postCard__rect" />
             <h3 className="postCard__title">{{ card.title }}</h3>
              <button className="btn postCard__btn" @click="addparams(card.link)">Читать</button>
            </div>
          </div>
          </div>
          
          
        </section>
      </div>
        <section className=" container formsub">
          <div className="formsub__left">
            <img src="formpaint.png" className="formsub__paint" />
          </div>
          <div className="formsub__right flexc">
            <h2 className="formsub__client">Стань участником проекта</h2>
            <input className="formsub__input" placeholder="Имя">
            <input className="formsub__input" placeholder="Телефон">
            <input className="formsub__input" placeholder="Email">
            <button class="btn formsub__btn">Присоединиться</button>
          </div>
        </section>
    </main>

    <hr>
    <footer className="footer">
      <div className="footer__left">
        <img src="Logo.png" className="footer__logo" />
        <div className="footer__logodesck text">Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и
          актуальные тенденции, раскрывая мир эстетики и креативности</div>
      </div>
      <div className="footer__right">
        <div className="footer__emaildesck">email</div>
        <div className="footer__email">testblogsupport@gmail.com</div>
        <div className="footer__socicons">
          <img src="facebook.png" className="footer__socicon" />
          <img src="vk.png" className="footer__socicon" />
          <svg className="footer__socicon" style="margin-top: 11%;margin-right: 19px;" width="30" height="30"
            viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15Z"
              fill="#1B1B1B" />
            <path
              d="M15 8.625C17.0625 8.625 17.3438 8.625 18.1875 8.625C18.9375 8.625 19.3125 8.8125 19.5938 8.90625C19.9687 9.09375 20.25 9.1875 20.5312 9.46875C20.8125 9.75 21 10.0313 21.0938 10.4063C21.1875 10.6875 21.2812 11.0625 21.375 11.8125C21.375 12.6563 21.375 12.8438 21.375 15C21.375 17.1562 21.375 17.3438 21.375 18.1875C21.375 18.9375 21.1875 19.3125 21.0938 19.5938C20.9062 19.9687 20.8125 20.25 20.5312 20.5312C20.25 20.8125 19.9687 21 19.5938 21.0938C19.3125 21.1875 18.9375 21.2812 18.1875 21.375C17.3438 21.375 17.1562 21.375 15 21.375C12.8438 21.375 12.6563 21.375 11.8125 21.375C11.0625 21.375 10.6875 21.1875 10.4063 21.0938C10.0313 20.9062 9.75 20.8125 9.46875 20.5312C9.1875 20.25 9 19.9687 8.90625 19.5938C8.8125 19.3125 8.71875 18.9375 8.625 18.1875C8.625 17.3438 8.625 17.1562 8.625 15C8.625 12.8438 8.625 12.6563 8.625 11.8125C8.625 11.0625 8.8125 10.6875 8.90625 10.4063C9.09375 10.0313 9.1875 9.75 9.46875 9.46875C9.75 9.1875 10.0313 9 10.4063 8.90625C10.6875 8.8125 11.0625 8.71875 11.8125 8.625C12.6563 8.625 12.9375 8.625 15 8.625ZM15 7.21875C12.8438 7.21875 12.6563 7.21875 11.8125 7.21875C10.9688 7.21875 10.4063 7.40625 9.9375 7.59375C9.46875 7.78125 9 8.0625 8.53125 8.53125C8.0625 9 7.875 9.375 7.59375 9.9375C7.40625 10.4063 7.3125 10.9688 7.21875 11.8125C7.21875 12.6563 7.21875 12.9375 7.21875 15C7.21875 17.1562 7.21875 17.3438 7.21875 18.1875C7.21875 19.0312 7.40625 19.5938 7.59375 20.0625C7.78125 20.5312 8.0625 21 8.53125 21.4688C9 21.9375 9.375 22.125 9.9375 22.4063C10.4063 22.5938 10.9688 22.6875 11.8125 22.7812C12.6563 22.7812 12.9375 22.7812 15 22.7812C17.0625 22.7812 17.3438 22.7812 18.1875 22.7812C19.0312 22.7812 19.5938 22.5938 20.0625 22.4063C20.5312 22.2188 21 21.9375 21.4688 21.4688C21.9375 21 22.125 20.625 22.4063 20.0625C22.5938 19.5938 22.6875 19.0312 22.7812 18.1875C22.7812 17.3438 22.7812 17.0625 22.7812 15C22.7812 12.9375 22.7812 12.6563 22.7812 11.8125C22.7812 10.9688 22.5938 10.4063 22.4063 9.9375C22.2188 9.46875 21.9375 9 21.4688 8.53125C21 8.0625 20.625 7.875 20.0625 7.59375C19.5938 7.40625 19.0312 7.3125 18.1875 7.21875C17.3438 7.21875 17.1562 7.21875 15 7.21875Z"
              fill="#FEFEFE" />
            <path
              d="M15 10.9688C12.75 10.9688 10.9688 12.75 10.9688 15C10.9688 17.25 12.75 19.0312 15 19.0312C17.25 19.0312 19.0312 17.25 19.0312 15C19.0312 12.75 17.25 10.9688 15 10.9688ZM15 17.625C13.5938 17.625 12.375 16.5 12.375 15C12.375 13.5938 13.5 12.375 15 12.375C16.4062 12.375 17.625 13.5 17.625 15C17.625 16.4062 16.4062 17.625 15 17.625Z"
              fill="#FEFEFE" />
            <path
              d="M19.125 11.8125C19.6428 11.8125 20.0625 11.3928 20.0625 10.875C20.0625 10.3572 19.6428 9.9375 19.125 9.9375C18.6072 9.9375 18.1875 10.3572 18.1875 10.875C18.1875 11.3928 18.6072 11.8125 19.125 11.8125Z"
              fill="#FEFEFE" />
          </svg>
          <svg className="footer__socicon" style="margin-top: 11%;" width="30" height="30" viewBox="0 0 30 30" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15Z"
              fill="#1B1B1B" />
            <path
              d="M8.03117 14.3515C12.0577 12.5972 14.7427 11.4407 16.0861 10.8819C19.9219 9.28648 20.7189 9.00934 21.2384 9.00009C21.3527 8.99817 21.6082 9.02649 21.7737 9.16077C21.9134 9.27416 21.9518 9.42732 21.9702 9.53482C21.9886 9.64232 22.0115 9.88721 21.9933 10.0786C21.7855 12.2626 20.8861 17.5626 20.4285 20.0088C20.2349 21.0439 19.8536 21.3909 19.4845 21.4249C18.6824 21.4987 18.0734 20.8948 17.2965 20.3855C16.0809 19.5887 15.3941 19.0926 14.2141 18.315C12.8504 17.4164 13.7344 16.9224 14.5116 16.1152C14.715 15.904 18.249 12.6895 18.3174 12.3979C18.326 12.3614 18.3339 12.2255 18.2532 12.1537C18.1724 12.0819 18.0532 12.1065 17.9672 12.126C17.8453 12.1537 15.9033 13.4373 12.1411 15.9768C11.5899 16.3553 11.0906 16.5397 10.6433 16.5301C10.1501 16.5194 9.20146 16.2512 8.49623 16.022C7.63124 15.7408 6.94377 15.5921 7.00363 15.1146C7.03481 14.8659 7.37733 14.6115 8.03117 14.3515Z"
              fill="#FEFEFE" />
          </svg>
        </div>
      </div>
    </footer>
    <section class="container subscription__cont subscription__conts">
      <div class="subscription__form">
        <div class="textstrong">Подпишись на рассылку</div>
        <div class="subscription__formmain">
          <input class="inputsb" placeholder="Email">
          <button class="btn btnsb">Подписаться</button>
        </div>
      </div>
    </section>

  </body>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import './css/normalize.css'
import './css/style.scss';
import { ref } from 'vue';
import axios from 'axios';
import { useMainStore } from '../stores/MainStore';


export default {  
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const mainStore = useMainStore();
    const path = ref('/'); 
    
    
   
    const addparams = (link) => {
    let params = new URLSearchParams(document.location.search);
    let name = params.set("path",link);
    let names = params.get("path");
    path.value=names
    loaddata()
    }

    const loaddata = () => {
     return axios.get('https://devtwit8.ru/api/v1/page/?path='+path.value)
        .then(response => {
          mainStore.loadStore(response.data);
          document.title=response.data.meta.title;
          document.querySelector('meta[name="description"]').setAttribute("content",response.data.meta.description );
          })
    }
    
    loaddata()
       return { mainStore, loaddata, addparams}
  },
  
}
</script>


