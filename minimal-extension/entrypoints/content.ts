export default defineContentScript({
  matches: ['<all_urls>'],
  allFrames: true,
  main() {
    console.log('Hello content.');
    document.querySelectorAll('[contenteditable]').forEach(el => {
      console.log('contenteditable', el);
      const a = document.createElement('div');
      a.innerText = 'Hello';
      el.appendChild(a);
    });
  },
});
