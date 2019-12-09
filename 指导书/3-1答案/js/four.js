
//var data = ["蒸羊羔", "蒸熊掌", "蒸鹿尾儿", "烧花鸭", "烧雏鸡儿", "烧子鹅", "卤煮咸鸭", "酱鸡", "腊肉", "松花", "小肚儿", "晾肉", "香肠", "什锦苏盘", "熏鸡", "白肚儿", "清蒸八宝猪", "江米酿鸭子", "罐儿野鸡", "罐儿鹌鹑", "卤什锦", "卤子鹅", "卤虾", "烩虾", "炝虾仁儿", "山鸡", "兔脯", "菜蟒", "银鱼", "清蒸哈什蚂", "烩鸭腰儿", "烩鸭条儿", "清拌鸭丝儿", "黄心管儿", "焖白鳝", "焖黄鳝", "豆鼓鲇鱼", "锅烧鲇鱼", "烀皮甲鱼", "锅烧鲤鱼", "抓炒鲤鱼", "软炸里脊", "软炸鸡", "什锦套肠", "麻酥油卷儿", "熘鲜蘑", "熘鱼脯儿", "熘鱼片儿", "熘鱼肚儿", "醋熘肉片儿", "熘白蘑", "烩三鲜", "炒银鱼", "烩鳗鱼", "清蒸火腿", "炒白虾", "炝青蛤", "炒面鱼", "炝芦笋", "芙蓉燕菜", "炒肝尖儿", "南炒肝关儿", "油爆肚仁儿", "汤爆肚领儿", "炒金丝", "烩银丝", "糖熘饹炸儿", "糖熘荸荠", "蜜丝山药", "拔丝鲜桃", "熘南贝", "炒南贝", "烩鸭丝", "烩散丹", "清蒸鸡", "黄焖鸡", "大炒鸡", "熘碎鸡", "香酥鸡", "炒鸡丁儿", "熘鸡块儿", "三鲜丁儿", "八宝丁儿", "清蒸玉兰片", "炒虾仁儿", "炒腰花儿", "炒蹄筋儿", "锅烧海参", "锅烧白菜", "炸海耳", "浇田鸡", "桂花翅子", "清蒸翅子", "炸飞禽", "炸葱", "炸排骨", "烩鸡肠肚儿", "烩南荠", "盐水肘花儿", "拌瓤子", "炖吊子", "锅烧猪蹄儿", "烧鸳鸯", "烧百合", "烧苹果", "酿果藕", "酿江米", "炒螃蟹.氽大甲", "什锦葛仙米", "石鱼", "带鱼", "黄花鱼", "油泼肉", "酱泼肉", "红肉锅子", "白肉锅子", "菊花锅子.野鸡锅子", "元宵锅子", "杂面锅子", "荸荠一品锅子", "软炸飞禽", "龙虎鸡蛋", "猩唇", "驼峰", "鹿茸", "熊掌", "奶猪", "奶鸭子", "杠猪", "挂炉羊", "清蒸江瑶柱", "糖熘鸡头米", "拌鸡丝儿", "拌肚丝儿", "什锦豆腐", "什锦丁儿", "精虾", "精蟹", "精鱼", "精熘鱼片儿", "熘蟹肉", "炒蟹肉", "清拌蟹肉", "蒸南瓜", "酿倭瓜", "炒丝瓜", "焖冬瓜", "焖鸡掌", "焖鸭掌", "焖笋", "熘茭白", "茄干儿晒卤肉", "鸭羹", "蟹肉羹", "三鲜木樨汤", "红丸子", "白丸子", "熘丸子", "炸丸子", "三鲜丸子", "四喜丸子", "氽丸子", "葵花丸子", "饹炸丸子", "豆腐丸子", "红炖肉", "白炖肉", "松肉", "扣肉", "烤肉", "酱肉", "荷叶卤", "一品肉", "樱桃肉", "马牙肉", "酱豆腐肉", "坛子肉", "罐儿肉", "元宝肉", "福禄肉", "红肘子", "白肘子", "水晶肘子", "蜜蜡肘子", "烧烀肘子", "扒肘条儿", "蒸羊肉", "烧羊肉", "五香羊肉", "酱羊肉.氽三样儿", "爆三样儿", "烧紫盖儿", "炖鸭杂儿", "熘白杂碎", "三鲜鱼翅", "栗子鸡", "尖氽活鲤鱼", "板鸭", "筒子鸡"]

var element_a = '<img class="item" draggable="true" ondragstart="drag(event)" id="';
var element_b = '" src="images/menus/';
var element_c = '.png">'

var clearAll = function () {
    $(".menu-no, .menu-yes").find("div").each(function () {
        $(this).remove();
    });
}

var setAll = function () {
    for (var i = 1; i < 10; i++) {
        $(".menu-no").append(element_a + "drag" + i + element_b + i + element_c);
    }
}

setAll();

var allowDrop = function (ev) {
    ev.preventDefault();
}

var drag = function (ev) {
    ev.dataTransfer.setData("Menu", ev.target.id);
}

var drop = function (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Menu");
    ev.target.appendChild(document.getElementById(data));
}
