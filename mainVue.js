@mixin size($w,$h :$w)
  width: $w
  height: $h
  
@mixin flex_center
  display: flex
  justify-content: center
  align-items: center
  
@mixin trans($t:0.5s,$td:0s)
  transition: $t $td
 
  
html,body
  margin: 0
  overflow: hidden
  width: 100%
  min-height: 100%
  background-color: #2c2c2c
  font-family: '微軟正黑體'
#app
  +size(100%) 
  +flex_center
  .container
    position: relative
    white-space: nowrap
    transition: 0.5s ease    //飄移!!!!!!!
    +size(1000px, 250px)
    .cards
      height: 100%
      width: 100%
      max-width: 1024px 
      .card
        height: 100%
        display: inline-block
        position: relative
        cursor: pointer
        .cover 
          +size(400px, 100%)
          margin-right: 300px
          margin-left: 300px
          background-size: cover
          background-position: center center
          h1,h5
            color: white
            font-weight: 300
            transform: translateX(-60px)
            text-shadow: 0 0 10px black
@keyframes sliceIn
  0%
    transform: translateX(-70px)
  100%
    transform: translateX(0px)
@keyframes FadeIn
  0%
    opacity: 0
    filter: sacurate(0%)
  100%
    opacity: 1
    filter: sacurate(100%)
  
.cur_items
  h1,h5
    animation: sliceIn 1s 0.3s ease both
  cover
    animation: FadeIn 1.5s ease both
#left
  position: absolute
  top: 20%
  left: 50px
  background: none
  border: none
  font-size: 40px
  cursor: pointer
  color: white
  &:hover
    color: lightblue
    +trans
#right
  position: absolute
  top: 20%
  right: 50px
  background: none
  border: none
  font-size: 40px
  cursor: pointer
  color: white
  &:hover
    color: lightblue
    +trans
    
