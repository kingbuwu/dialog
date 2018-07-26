//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    qdDialog: {
      show: false, //是否显示
      content: "内容", 
      title: "标题", 
      buttonsShowVertical:true,//按钮横排还是竖排
      showinput:false,//是否显示输入框
      imgsrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532578807508&di=4c389e1bcff86956f80802a179209414&imgtype=0&src=http%3A%2F%2Flol.91danji.com%2FUploadFile%2F20141128%2F1417165228238101.jpg",//图片显示
      buttons: [  //按钮内容
        { text: '取消', color: "#ff8427", types: 1 }, 
        { text: '确定', color: "#ff8427", types: 2 }
      ]
    }
  },
  
  //弹出的自定义内容方法
  openDialog: function () {
    let qdDialog = this.data.qdDialog;
    qdDialog.show = true;
    qdDialog.content = '这是是内容';
    qdDialog.buttons = [{ text: '按钮', color: "#ff8427", types: 2 }];
    this.setData({ qdDialog: qdDialog })
  },

  //关闭弹框
  closeDialog: function () {
    let qdDialog = this.data.qdDialog;
    qdDialog.show = false;
    qdDialog.buttons = [];
    this.setData({ qdDialog: qdDialog })
  },

  onLoad: function () {},
})
