'use client';
import Image from "next/image";
import { useEffect } from "react";
import { Cutive_Mono,Space_Mono } from "next/font/google";

export default function Home() {
  useEffect(() => {
    alert("Hello! This is Amatatu's Portfolio!");
    const timer = setTimeout(() => {
      const spinner = document.getElementById('loading');
      if (spinner) {
        spinner.classList.add('loaded');
      }
    }, 800);
    return () => clearTimeout(timer); // コンポーネントがアンマウントされるときにタイマーをクリア
  }, []);
  return (
    <>
     <div className="atom-spinner " id={"loading"}>
            <div className="spinner-inner">
              <div className="spinner-line"></div>
              <div className="spinner-line"></div>
              <div className="spinner-line"></div>
              <div className="spinner-circle">
                &#9679;
              </div>
            </div>
          </div>
        <article>
            <header>
                <div className="linux_tile">
                    <div className="tile_header">
                        <div className="header_btn1">
                        </div>
                        <div className="header_btn2">
                        </div>
                        <div className="header_btn3">
                        </div>
                    </div>
                    <div className="tile_bar">
                        <p className="credit">&copy;2023 amatatu.tech</p>
                    </div>
                    <div className="tile_bio">
                        <div className="tile_image">
                            <div className="icon"></div>
                            <ul className="tile_link">
                                <li><a href="#works">#Works</a></li>
                                <li><a href="#timeline">#TimeLine</a></li>
                                <li><a href="#blog">#Blog</a></li>
                            </ul>
                        </div >
                        <div className="tile_main">
                            <h1 className="tile_title">
                                About me!
                            </h1>
                            <div className="dotted"></div>
                            <ul className="tile_ul">
                                <li className="row">
                                    <p className="row_title">name</p>
                                    <p className="row_content">: amatatsu</p>
                                </li>
                                <li className="row">
                                    <p className="row_title">age</p>
                                    <p className="row_content">: 19</p>
                                </li >
                                <li className="row">
                                    <p className="row_title">status</p>
                                    <p className="row_content">: Unv B2</p>
                                </li >
                                <li className="row">
                                    <p className="row_title">skill</p>
                                    <p className="row_content">: Dart,JavaScript</p>
                                </li >
                                <li className="row">
                                    <p className="row_title">interest</p>
                                    <p className="row_content">: Web,security</p>
                                </li >
                                <li className="row">
                                    <p className="row_title">hobby</p>
                                    <p className="row_content">:Badminton,Photo</p>
                                </li >
                                <li className="row">
                                    <p className="row_title">social</p>
                                    <p className="row_content">: 
                                      <ul className="footer-nav">
                                          <li className="twitter"><a href="https://twitter.com/T_Kanntoku"><Image src="/images/twitter.svg" alt="twitter" width={500} height={300}/></a></li>
                                          <li className="zenn"><a href="https://zenn.dev/kotopasi"><Image src="/images/logo-only-white.svg" alt="zenn"width={500} height={300}/></a></li>
                                          <li className="github"><a href="https://github.com/nematatu"><Image src="/images/github.svg" alt="github" width={500} height={300}/></a></li>
                                          <li className="qiita"><a href="https://qiita.com/nematatu"><Image src="/images/favicon.png" alt="qiita" width={500} height={300}/></a></li>
                                      </ul>
                                    </p>
                                </li >
                            </ul>
                        </div> 
                        
                    </div>
                    <div className="tile_konsole">
                        <div className="tile_arrow">
                            
                        </div>                        <div className="tile_flashing">
                        </div>
                    </div >
                </div>
            </header>
            <div className="works pages" id="works">
                <h1 className="works_title pages_title">
                    # works
                </h1>
                <div className=" grid">

                    <div className="item">
                        <p className="item_date">23/8/18</p>
                        <Image src="/images/portfolio.png" alt="portfolio" width={500} height={300} />
                        <div className="item_context">
                            <p className="item_title">Portfolio</p>
                            <p className="item_desc">このポートフォリオです。</p>
                            <div className="item_tag">
                                <p>#Web制作</p>
                            </div>
                        </div >
                    </div>
                    <div className="item">
                        <p className="item_date">23/8/11</p>
                        <Image src="/images/nostr.png" alt="nostr" width={500} height={300} />
                        <div className="item_context">
                            <p className="item_title">No name..</p>
                            <p className="item_desc">運動記録型Nostr製SNSです</p>
                            <div className="item_tag">
                                <p>#Flutter</p>
                                <p>#Nostr</p>
                                <p>#技育展</p>
                            </div>
                        </div >
                    </div>
                    <div className="item">
                        <p className="item_date">23/4/29</p>
                        <Image src="/images/karuta coder.png" alt="karuta" width={500} height={300} />
                        <div className="item_context">
                            <p className="item_title">Karuta Coder</p>
                            <p className="item_desc">学習かるたアプリです</p>
                            <div className="item_tag">
                                <p>#Flutter</p>
                                <p>#ハッカソン</p>
                            </div>
                        </div >
                    </div>
                    </div>
            </div>
            <div className="timeline pages" id="timeline">
                <h1 className="timeline-title pages_title">
                    # TimeLine
                </h1>
                <ul className="timeline-ul">
                    <li>
                            <p className="timeline-date">
                                2023/4/29
                            </p>
                            <a href="#" className="timeline-content">
                                技育CAMPキャラバンin京都 企業賞受賞!
                            </a>
                </li>
                    <li>
                            <p className="timeline-date">
                                2023/8/11
                            </p>
                            <a href="#" className="timeline-content">
                                技育展 予選敗退…
                            </a>
                </li>
                    <li>
                            <p className="timeline-date">
                                Now
                            </p>
                            <a href="#" className="timeline-content">
                                Learning Web technology!!
                            </a>
                </li>
                </ul>
            </div>
</article>
<footer>
    <ul className="footer-nav">
        <li className="twitter"><a href="https://twitter.com/T_Kanntoku"><Image alt="twitter" src="/images/twitter.svg" width={500} height={300} /></a></li>
        <li className="zenn"><a href="https://zenn.dev/kotopasi"><Image alt="zenn" src="/images/logo-only-white.svg" width={500} height={300} /></a></li>
        <li className="github"><a href="https://github.com/nematatu"><Image alt="github" src="/images/github.svg" width={500} height={300} /></a></li>
        <li className="qiita"><a href="https://qiita.com/nematatu"><Image alt="qiita" src="/images/favicon.png" width={500} height={300} /></a></li>
    </ul>
    <p><small>&copy;2023 amatatu.tech</small></p>
</footer>
    </>
  )
  }