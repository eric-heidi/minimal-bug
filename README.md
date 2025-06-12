bug:

allFrames works inconsistently: sometimes it will find all iframes and sometimes it won't

steps to reproduce:

```
# cd to minimal-html in 2 different terminals
# in one, run `npx vite serve outer --port 5173`
# in the other, run `npx vite serve inner --port 5174`


# in another terminal, cd into minimal-extension
# run `npm run dev`

# in the chrome tab, go to 'https://jhollingworth.github.io/bootstrap-wysihtml5/
# here it does not find the inner iframe 

# in the chrome tab, go to 'http://localhost:5173
# here it does find the inner iframe
```
