import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page4() {
  return (
    <ScrollOverPack id="page4" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">
            LOVE · LIVE · HAPPY
        </h2>
        <p key="p">
        “𝑻𝒉𝒊𝒏𝒌𝒊𝒏𝒈 𝒐𝒇 𝒚𝒐𝒖 𝒌𝒆𝒆𝒑𝒔 𝒎𝒆 𝒂𝒘𝒂𝒌𝒆. 𝑫𝒓𝒆𝒂𝒎𝒊𝒏𝒈 𝒐𝒇 𝒚𝒐𝒖 𝒌𝒆𝒆𝒑𝒔 𝒎𝒆 𝒂𝒔𝒍𝒆𝒆𝒑. 𝑩𝒆𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝒚𝒐𝒖 𝒌𝒆𝒆𝒑𝒔 𝒎𝒆 𝒂𝒍𝒊𝒗𝒆.”
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0, opacity: 1, duration: 550, delay: 150, ease: 'easeOutQuad',
        }}
        style={{ transform: 'translateY(50px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
