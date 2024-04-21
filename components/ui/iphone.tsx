/* eslint-disable @next/next/no-img-element */

export function iPhone() {
  return (
    <div className="perspective">
      <div className="iphone-x not-prose overflow-hidden">
        <i>Speaker</i>
        <b>Camera</b>
        <div className="relative top-0 z-[1] flex h-[30px] justify-between bg-primary px-6 text-white">
          <div>00:30</div>
        </div>
        <img
          src="https://i.redd.it/this-is-clearly-a-scam-but-how-would-a-scammer-benefit-from-v0-655nti3hs1g81.jpg?width=1242&format=pjpg&auto=webp&s=9c33a05f12f1247fd290a9338f7eb2f414aa215f"
          className="relative z-0 block h-full"
          alt="iPhone X"
        />
        <div className="reflection" />
      </div>
    </div>
  );
}
