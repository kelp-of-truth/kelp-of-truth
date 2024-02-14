let key_arr=[];
const Key=class{
    constructor(key_code,detail){
        this.key_code=key_code;
        if(detail===null){
            this.detail={
                
            }
        }else{
            this.detail=detail;
        }
    }
    set setState(state){
        key_arr[this.key_code]=state;
    }
    get state(){
        return key_arr[this.key_code];
    }
    get key_code(){
        return this.key_code;
    }
}
document.addEventListener("keydown",(e)=>{
    key_arr[e.keyCode]=true;
})
document.addEventListener("keyup",(e)=>{
    key_arr[e.keyCode]=false;
})

// Keys
//  Number
const key0=new Key(48);
const key1=new Key(49);
const key2=new Key(50);
const key3=new Key(51);
const key4=new Key(52);
const key5=new Key(53);
const key6=new Key(54);
const key7=new Key(55);
const key8=new Key(56);
const key9=new Key(57);
// Index
const keyA=new Key(65);
const keyB=new Key(66);
const keyC=new Key(67);
const keyD=new Key(68);
const keyE=new Key(69);
const keyF=new Key(70);
const keyG=new Key(71);
const keyH=new Key(72);
const keyI=new Key(73);
const keyJ=new Key(74);
const keyK=new Key(75);
const keyL=new Key(76);
const keyM=new Key(77);
const keyN=new Key(78);
const keyO=new Key(79);
const keyP=new Key(80);
const keyQ=new Key(81);
const keyR=new Key(82);
const keyS=new Key(83);
const keyT=new Key(84);
const keyU=new Key(85);
const keyV=new Key(86);
const keyW=new Key(87);
const keyX=new Key(88);
const keyY=new Key(89);
const keyZ=new Key(90);
//  Function
const keyF1=new Key(112);
const keyF2=new Key(113);
const keyF3=new Key(114);
const keyF4=new Key(115);
const keyF5=new Key(116);
const keyF6=new Key(117);
const keyF7=new Key(118);
const keyF8=new Key(119);
const keyF9=new Key(120);
const keyF10=new Key(121);
const keyF11=new Key(122);
const keyF12=new Key(123);
//  Temkey
const keyT0=new Key(96);
const keyT1=new Key(97);
const keyT2=new Key(98);
const keyT3=new Key(99);
const keyT4=new Key(100);
const keyT5=new Key(101);
const keyT6=new Key(102);
const keyT7=new Key(103);
const keyT8=new Key(104);
const keyT9=new Key(105);
const keyTAsterrisk=new Key(106);
const keyTPlus=new Key(107);
const keyTMinus=new Key(109);
const keyTDot=new Key(110);
const keyTSlash=new Key(111);
// Other
const keyBackSpace=new Key(8);
const keyTab=new Key(9);
const keyEnter=new Key(13);
const keyShift=new Key(16);
const keyCtrl=new Key(17);
const keyAlt=new Key(18);
const keyPauseBreak=new Key(19);
const keyCapsLock=new Key(20);
const keyEsc=new Key(27);
const keySpace=new Key(32);
const keyPageUp=new Key(33);
const keyPageDown=new Key(34);
const keyEnd=new Key(35);
const keyHome=new Key(36);
const keyArrowLeft=new Key(37);
const keyArrowTop=new Key(38);
const keyArrowRight=new Key(39);
const keyArrowBottom=new Key(40);
const keyInsert=new Key(45);
const keyDelete=new Key(46);
const keyNumLock=new Key(144);
const keyScrollLock=new Key(145);
const keyCoron=new Key(186);
const keySemiCoron=new Key(187);
const keyComma=new Key(188);
const keyMinus=new Key(189)
const keyDot=new Key(190);
const keySlash=new Key(191);
const keyAt=new Key(192);
const keySquareMarkLeft=new Key(219);
const keyVerticalBar=new Key(220);
const keySquareMarkRight=new Key(221);
const keyCaret=new Key(222);
const keyBackSlash=new Key(226);
