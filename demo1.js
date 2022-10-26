const cardList=document.querySelectorAll(".card");
const isEmpty={
  card1:true,
  card1_name:null,
  card2:true,
  card2_name:null,
  card3:true,
  card3_name:null,
  card4:true,
  card4_name:null,
}
for (let i = 0;i < cardList.length;i++) {
  cardList[i].onmousedown=(e)=>{
    const originalTop=e.clientY;
    const top=getTop(i);
    cardList[i].className=`card_active card${i+1}_active`
    document.onmousemove=(e)=>{//获取元素原始高度
      const y=e.clientY;
      cardList[i].style.top=`${top - (originalTop - y)}px`;
      changeCard(cardList[i].offsetTop,i);

    }
    document.onmouseup=()=>{
      cardList[i].className=`card card${i+1}`
      const topNow=cardList[i].offsetTop;
      layCard(i,topNow);
      document.onmousedown=null;
      document.onmousemove=null;
      document.onmouseup=null;
    }
  }
}
function getTop(i) {
  console.log(cardList[i].offsetTop)
  return cardList[i].offsetTop;
}

function layCard(i,topNow) {
  if(topNow<95) {
    cardList[i].style.top='20px'
  } else if(topNow>=95&&topNow<285){
    cardList[i].style.top='190px'
  } else if(topNow>=285&&topNow<455) {
    cardList[i].style.top='360px'
  } else {
    cardList[i].style.top='530px'
  }
}
function changeCard(y,i) {
  const otherList=document.querySelectorAll(".card");
  for(let j = 0;j<otherList.length;j++) {
    switch(otherList[j].offsetTop) {
      case 20:
        isEmpty.card1=false;
        isEmpty.card1_name=otherList[j];
        break;
      case 190:
        isEmpty.card2=false;
        isEmpty.card2_name=otherList[j];
        break;
      case 360:
        isEmpty.card3=false;
        isEmpty.card3_name=otherList[j];
        break;
      case 530:
        isEmpty.card4_name=otherList[j];
        isEmpty.card4=false;
        break;
    }
  }
  if(cardList[i].offsetTop<95) {
    if(isEmpty.card2) {
      isEmpty.card1_name.style.top=`190px`
    }
  }
  if(cardList[i].offsetTop>=95&&cardList[i].offsetTop<285) {
    if(isEmpty.card1) {
      isEmpty.card2_name.style.top='20px'
    } else if(isEmpty.card3) {
      isEmpty.card2_name.style.top="360px"
    }
  }
  if(cardList[i].offsetTop>=285&&cardList[i].offsetTop<455) {
    if(isEmpty.card2) {
      isEmpty.card3_name.style.top='190px'
    } else if(isEmpty.card4) {
      isEmpty.card3_name.style.top="530px"
    }
  }
  if(cardList[i].offsetTop>=455) {
    if(isEmpty.card3) {
      isEmpty.card4_name.style.top='360px'
    }
  }

  clearIsEmpty();


}
function clearIsEmpty() {
  isEmpty.card1_name=null;
  isEmpty.card1=true;
  isEmpty.card2_name=null;
  isEmpty.card2=true;
  isEmpty.card3=true;
  isEmpty.card3_name=null;
  isEmpty.card4=true;
  isEmpty.card4_name=null;
}