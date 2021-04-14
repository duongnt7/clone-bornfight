<template>
  <div class="footer">
    <div class="footer-section--top">
      <div class="footer-section__content">
        <div class="footer-container">
          <div class="flex">
            <div class="footer-content--left">
              <div class="footer-content-wrap">
                <div class="footer-content__title">
                  Work
                </div>
                <div class="footer-content__description">
                  Take a look at what we've created and get inspired
                </div>
                <div class="footer-content__view">
                  ViewWork
                </div>
              </div>
            </div>
            <div class="footer-content--right">
              <div class="footer-content-wrap">
                <div class="footer-content__title">
                  Services
                </div>
                <div class="footer-content__description">
                  See what we do and learn more about working together
                </div>
                <div class="footer-content__view">
                  ViewWork
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-section--bottom">
      <div class="footer-section__content">
        <div class="footer-container">
          <div class="footer-section__link flex">
            <div class="footer-section__link--left w-1/2">
              <ul class="footer-column">
                <div class="footer-content-wrap">
                  <li>Home</li>
                  <li>What we do</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Our work</li>
                  <li>Contact</li>
                  <li>Legal information</li>
                </div>
              </ul>
            </div>
            <div class="footer-section__link--right w-1/2 flex">
              <ul class="footer-column w-1/2">
                <div class="footer-content-wrap">
                  <a href="">
                    Bornfight<br />
                    Vukasoviceva 1,
                    <br />
                    10000 Zagreb
                    <br />
                    Croatia
                  </a>
                  <ul class="c-contact-info">
                    <li class="c-contact-info__item">
                      <span class="u-b6">
                        t:
                      </span>
                      <a
                        class="c-button c-button--small"
                        href="tel: +385 1 3333 710"
                      >
                        <span> +385 1 3333 710 </span>
                      </a>
                    </li>
                    <li class="c-contact-info__item">
                      <span class="u-b6">
                        m:
                      </span>
                      <a
                        class="c-button c-button--text c-button--bordered c-button--small"
                        href="mailto: hello@bornfight.com"
                      >
                        <span>hello@bornfight.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
              <ul class="footer-column w-1/2">
                <div class="footer-content-wrap">
                  <li class="c-footer-links__item">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Bornfight.company/"
                      class="c-button c-button--text c-button--small c-button--bordered"
                    >
                      <span> Facebook </span>
                    </a>
                  </li>
                  <li class="c-footer-links__item">
                    <a
                      target="_blank"
                      href="https://twitter.com/Bornfight_"
                      class="c-button c-button--text c-button--small c-button--bordered"
                    >
                      <span> Twitter </span>
                    </a>
                  </li>
                  <li class="c-footer-links__item">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/bornfight"
                      class="c-button c-button--text c-button--small c-button--bordered"
                    >
                      <span> Instagram </span>
                    </a>
                  </li>
                  <li class="c-footer-links__item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/bornfight/"
                      class="c-button c-button--text c-button--small c-button--bordered"
                    >
                      <span> LinkedIn </span>
                    </a>
                  </li>
                  <li class="c-footer-links__item">
                    <a
                      target="_blank"
                      href="https://dribbble.com/Bornfight"
                      class="c-button c-button--text c-button--small c-button--bordered"
                    >
                      <span> Dribbble </span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div class="footer-section__bar">
            <div class="w-2/4">© Bornfight. All rights reserved 2021</div>
            <div class="w-2/4 pl-72">
              <a
                href="https://www.bornfight.com/privacy-policy/"
                class="c-button c-button--text c-button--small c-button--bordered"
              >
                <span>Privacy Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer .footer-section--top {
  background-color: #1a1a1a;
  height: 360px;
}
.footer-section__content {
  height: 100%;
  padding-left: 6.25%;
}
.footer-container {
  float: right;
  width: 100%;
  height: 100%;
  max-width: 88.88889%;
  padding-left: 6.66667%;
  padding-right: 4.44444%;
}
.footer-content--left,
.footer-content--right {
  height: 100%;
  width: 50%;
}

.footer-content-wrap {
  margin: 100px 0;
  letter-spacing: -0.5px;
}
.footer-content__title {
  font-size: 25px;
}
.footer-content__description {
  font-size: 16px;
  margin: 20px 0 45px 0;
  max-width: 210px;
}
.footer-content__title {
  font-size: 25px;
}

.footer-section--bottom {
  background-color: #0d0d0d;
  height: 490px;
}
.footer-section__bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
