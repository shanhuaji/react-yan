// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8" />
//     <title>css</title>
//   </head>
//   <style type="text/css">
//     * {
//       margin: 0;
//       padding: 0;
//     }
//     /* 最外层套一个div 里边是左中右三个div，中间的div里边还有一个div，左中右div浮动 */
//     /* 中间的里面div分别设置左右margin=左右div的宽度 */
//     /* 左边div margin-left: -100%;  右边div  margin-left: -200px; */
//     .main > div {
//       float: left;
//     }
//     .left {
//       width: 200px;
//       background:red;
//       margin-left: -100%;/* 通过给margin设置-100%自动向上让它到最左边 */
//     }
//     .middle {
//       width: 100%;
//       background: yellow;
//     }
//     .content {
//       margin-left: 200px;
//       margin-right: 200px;
//     }
//     .right {
//       width: 200px;
//       background: blue;
//       margin-left: -200px;/* 所以只需要设置margin-left为自身的宽度负值后，自动会往上行 */
//     }
//   </style>
//   <body>
//     <div class="main">
//       <div class="middle">
//         <div class="content">中间</div>
//       </div>
//       <div class="left">左边</div>
//       <div class="right">右边</div>
//     </div>
//   </body>
// </html>
console.log(111111);