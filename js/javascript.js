var laptop =
[
    ["HP 15 da0054TU","Dell Inspiron 14","Asus VivoBook S15","Asus X407UA", "Asus VivoBook", "Apple Macbook Pro Touch MR9Q2SA/A",'Apple Macbook Air MQD32SA/A','Apple Macbook Pro Touch MPXV2SA/A','Dell Vostro 3468','Dell Inspiron 5379','HP 15 da0048TU','HP Envy 13 ah0027TU'],
    ["10.990.000","14.690.000","12.990.000","10.090.000","14.590.000","44.490.000",'20.990.000','44.990.000','11.290.000','24.490.000','7.690.000','23.990.000'],
    ["LT1.jpg","LT2.png","LT3.jpg","LT4.jpg","LT5.jpg","LT6.jpg",'LT7.jpg','LT8.jpg','LT9.jpg','LT10.jpg','LT11.jpg','LT12.jpg'],
    ["HP","Dell","Asus","Asus","Asus","Apple",'Apple','Apple','Dell','Dell','HP','HP']
];
var dienthoai=
[
    ["Samsung Galaxy Note 9","OPPO A7","iPhone Xs Max 512GB","iPhone X 256GB","Samsung Galaxy A7","Samsung Galaxy S9+ 64GB","OPPO Find X",'OPPO R17 Pro','iPhone 7 Plus 256GB'],
    ["22.990.000","5.990.000","42.990.000","29.990.000","7.690.000","23.490.000","20.990.000",'16.990.000','23.990.000'],
    ["DT1.png","DT2.png","DT3.png","DT4.png","DT5.png","DT6.png","DT7.png",'DT8.png','DT9.png'],
    ["Samsung","Oppo","Apple","Apple","Samsung","Samsung","Oppo",'Oppo','Apple']
];
var tablet=
[
    ["Samsung Galaxy Tab A","iPad Wifi 32GB","iPad Pro 10.5 inch Wifi Cellular 64GB","Samsung Galaxy Tab S4","Huawei MediaPad M3 8.0","Lenovo Tab 4 8 16GB",'Huawei MediaPad T3 10','Lenovo Tab 7 Essential 16GB','Samsung Galaxy Tab A6 7.0'],
    ["9.490.000","8.990.000","19.990.000","17.990.000","5.990.000","3.690.000",'4.490.000','2.390.000','3.290.000'],
    ["TL1.png","TL2.png","TL3.png","TL4.png","TL5.png","TL6.png",'TL7.png','TL8.png','TL9.png'],
    ["Samsung","Apple","Apple","Samsung","Huawei","Lenovo",'Huawei','Lenovo','Samsung']
]; 
var phukien=
[
    ["Pin sac du phong eSaver 5.000 mAh","Day cap Micro USB 0.2m","The nho SDHC4 8GB Sandisk","Tai nghe EP Awei Q19Hi","USB 2.0 8 GB Transcend JetFlash 360","Chuot co day Logitech M100r Đen"],
    ["200.000","24.000","150.000","105.000","150.000","70.000"],
    ["PI1.jpg","CA2.jpg","TN3.jpg","TN4.jpg","US5.jpg","CH6.jpg"],
    ["PinSac","CapSac","TheNho","TaiNghe","USB","Chuot"]
];
function luuGioHang()
{
    alert("Đã thêm vào giỏ hàng!");
    location.reload();
    var url = window.location.href;
    var params = url.split('?');
    for(i=0; i<dienthoai[0].length; i++)
    {
        if(params[1]==dienthoai[0][i].replace(/ /g,"-"))
        {
            localStorage.setItem('tenDT'+i,dienthoai[0][i]);
            localStorage.setItem('giaDT'+i,dienthoai[1][i]);
        }
    }
    for(i=0; i<laptop[0].length; i++)
    {
        if(params[1]==laptop[0][i].replace(/ /g,"-"))
        {
            localStorage.setItem('tenLT'+i,laptop[0][i]);
            localStorage.setItem('giaLT'+i,laptop[1][i]);
        }
    }
    for(i=0; i<tablet[0].length; i++)
    {
        if(params[1]==tablet[0][i].replace(/ /g,"-"))
        {
            localStorage.setItem('tenTL'+i,tablet[0][i]);
            localStorage.setItem('giaTL'+i,tablet[1][i]);
        }
    }
    for(i=0; i<phukien[0].length; i++)
    {
        if(params[1]==phukien[0][i].replace(/ /g,"-"))
        {
            localStorage.setItem('tenPK'+i,phukien[0][i]);
            localStorage.setItem('giaPK'+i,phukien[1][i]);
        }
    }    
}

function hienThiVaoGio ()
{
    var total = 0;
    var d = "";
            d += '<div style="float:left; width:70%;text-align: left;"><b>Tên sản phẩm</b></div>';
            d += '<div style="float:left; width:30%;text-align: right;"><b>Đơn giá</b></div>';

    for(i = 0; i<10; i++)
    {
        if(localStorage.getItem('tenLT'+i) != null)
        {
            total += parseInt((localStorage.getItem('giaLT'+i)).replace(/\./g, ''));
           
            d += '<div style="float:left; width:50%;text-align: left;">'+localStorage.getItem('tenLT'+i)+'</div>';
            d += '<div style="float:right; width:50%;text-align: right;">'+localStorage.getItem('giaLT'+i)+'₫</div>';

        }
        if(localStorage.getItem('tenDT'+i) != null)
        {
            total += parseInt((localStorage.getItem('giaDT'+i)).replace(/\./g, ''));
            d += '<div style="float:left; width:50%;text-align: left;">'+localStorage.getItem('tenDT'+i)+'</div>';
            d += '<div style="float:right; width:50%;text-align: right;">'+localStorage.getItem('giaDT'+i)+'₫</div>';
 
        }
        if(localStorage.getItem('tenTL'+i) != null)
        {
            total += parseInt((localStorage.getItem('giaTL'+i)).replace(/\./g, ''));
            d += '<div style="float:left; width:50%;text-align: left;">'+localStorage.getItem('tenTL'+i)+'</div>';
            d += '<div style="float:right; width:50%;text-align: right;">'+localStorage.getItem('giaTL'+i)+'₫</div>';

        }
        if(localStorage.getItem('tenPK'+i) != null)
        {
            total += parseInt((localStorage.getItem('giaPK'+i)).replace(/\./g, ''));
            d += '<div style="float:left; width:50%;text-align: left;">'+localStorage.getItem('tenPK'+i)+'</div>';
            d += '<div style="float:right; width:50%;text-align: right;">'+localStorage.getItem('giaPK'+i)+'₫</div>';        
        }
    }
    document.getElementById("cart").innerHTML = d;
    document.getElementById("total").innerHTML = total+"₫";
}


function aa()
{
    var url = window.location.href;
    var params = url.split('?');
    var s='';
    switch(params[1])
    {
        //dt
        case 'dtsamsung':
        {
            s=s+'<div class="loai">Samsung</div>';
            for(i=0; i<dienthoai[0].length; i++)
            {
                if(dienthoai[3][i]=="Samsung")
                s=s+'<a href="chitietsanpham.html?'+dienthoai[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+dienthoai[2][i]+'" width="100%" height="60%"/><p>'+dienthoai[0][i]+'</p><hr><p><b class="gia">'+dienthoai[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'dtapple':
        {
            s=s+'<div class="loai">Apple</div>';
            for(i=0; i<dienthoai[0].length; i++)
            {
                if(dienthoai[3][i]=="Apple")
                s=s+'<a href="chitietsanpham.html?'+dienthoai[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+dienthoai[2][i]+'" width="100%" height="60%"/><p>'+dienthoai[0][i]+'</p><hr><p><b class="gia">'+dienthoai[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'dtoppo':
        {
            s=s+'<div class="loai">Oppo</div>';
            for(i=0; i<dienthoai[0].length; i++)
            {
                if(dienthoai[3][i]=="Oppo")
                s=s+'<a href="chitietsanpham.html?'+dienthoai[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+dienthoai[2][i]+'" width="100%" height="60%"/><p>'+dienthoai[0][i]+'</p><hr><p><b class="gia">'+dienthoai[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        //lt
        case 'ltapple':
        {
            s=s+'<div class="loai">Apple</div>';
            for(i=0; i<laptop[0].length; i++)
            {
                if(laptop[3][i]=="Apple")
                s=s+'<a href="chitietsanpham.html?'+laptop[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+laptop[2][i]+'" width="100%" height="60%"/><p>'+laptop[0][i]+'</p><hr><p><b class="gia">'+laptop[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'ltdell':
        {
            s=s+'<div class="loai">Dell</div>';
            for(i=0; i<laptop[0].length; i++)
            {
                if(laptop[3][i]=="Dell")
                s=s+'<a href="chitietsanpham.html?'+laptop[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+laptop[2][i]+'" width="100%" height="60%"/><p>'+laptop[0][i]+'</p><hr><p><b class="gia">'+laptop[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'lthp':
        {
            s=s+'<div class="loai">HP</div>';
            for(i=0; i<laptop[0].length; i++)
            {
                if(laptop[3][i]=="HP")
                s=s+'<a href="chitietsanpham.html?'+laptop[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+laptop[2][i]+'" width="100%" height="60%"/><p>'+laptop[0][i]+'</p><hr><p><b class="gia">'+laptop[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'ltasus':
        {
            s=s+'<div class="loai">Asus</div>';
            for(i=0; i<laptop[0].length; i++)
            {
                if(laptop[3][i]=="Asus")
                s=s+'<a href="chitietsanpham.html?'+laptop[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+laptop[2][i]+'" width="100%" height="60%"/><p>'+laptop[0][i]+'</p><hr><p><b class="gia">'+laptop[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        //tl
        case 'tlsamsung':
        {
            s=s+'<div class="loai">Samsung</div>';
            for(i=0; i<tablet[0].length; i++)
            {
                if(tablet[3][i]=="Samsung")
                s=s+'<a href="chitietsanpham.html?'+tablet[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+tablet[2][i]+'" width="100%" height="60%"/><p>'+tablet[0][i]+'</p><hr><p><b class="gia">'+tablet[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'tlapple':
        {
            s=s+'<div class="loai">Apple</div>';
            for(i=0; i<tablet[0].length; i++)
            {
                if(tablet[3][i]=="Apple")
                s=s+'<a href="chitietsanpham.html?'+tablet[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+tablet[2][i]+'" width="100%" height="60%"/><p>'+tablet[0][i]+'</p><hr><p><b class="gia">'+tablet[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'tlhuawei':
        {
            s=s+'<div class="loai">Huawei</div>';
            for(i=0; i<tablet[0].length; i++)
            {
                if(tablet[3][i]=="Huawei")
                s=s+'<a href="chitietsanpham.html?'+tablet[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+tablet[2][i]+'" width="100%" height="60%"/><p>'+tablet[0][i]+'</p><hr><p><b class="gia">'+tablet[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'tllenovo':
        {
            s=s+'<div class="loai">Lenovo</div>';
            for(i=0; i<tablet[0].length; i++)
            {
                if(tablet[3][i]=="Lenovo")
                s=s+'<a href="chitietsanpham.html?'+tablet[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+tablet[2][i]+'" width="100%" height="60%"/><p>'+tablet[0][i]+'</p><hr><p><b class="gia">'+tablet[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        //pk
        case 'pksdp':
        {
            s=s+'<div class="loai">Sạc dự phòng</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="SDP")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'pkps':
        {
            s=s+'<div class="loai">Pin Sạc</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="PinSac")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'pkcs':
        {
            s=s+'<div class="loai">Cáp Sạc</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="CapSac")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'pktn':
        {
            s=s+'<div class="loai">Thẻ Nhớ</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="TheNho")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'pkhp':
        {
            s=s+'<div class="loai">Tai Nghe</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="TaiNghe")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'pkusb':
        {
            s=s+'<div class="loai">USB</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="USB")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        case 'pkc':
        {
            s=s+'<div class="loai">Chuột</div>';
            for(i=0; i<phukien[0].length; i++)
            {
                if(phukien[3][i]=="Chuot")
                s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
        default:
        {     
            var s='';
            s=s+'<div class="loai">Laptop</div>';
            for(i=0; i<laptop[0].length&&i<6; i++)
            {
                s=s+'<a href="chitietsanpham.html?'+laptop[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+laptop[2][i]+'" width="100%" height="60%"/><p>'+laptop[0][i]+'</p><hr><p><b class="gia">'+laptop[1][i]+'₫</b></p></div></a>';
            }
            s=s+'<div class="loai">Điện thoại</div>';
            for(i=0; i<dienthoai[0].length&&i<6; i++)
            {
            s=s+'<a href="chitietsanpham.html?'+dienthoai[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+dienthoai[2][i]+'" width="100%" height="60%"/><p>'+dienthoai[0][i]+'</p><hr><p><b class="gia">'+dienthoai[1][i]+'₫</p></b></div></a>';
            }
            s=s+'<div class="loai">Tablet</div>';
            
            for(i=0; i<tablet[0].length&&i<6; i++)
            {
            s=s+'<a href="chitietsanpham.html?'+tablet[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+tablet[2][i]+'" width="100%" height="60%"/><p>'+tablet[0][i]+'</p><hr><p><b class="gia">'+tablet[1][i]+'₫</p></b></div></a>';
            }
            s=s+'<div class="loai">Phụ kiện</div>';
            for(i=0; i<phukien[0].length&&i<6; i++)
            {
            s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'₫</p></b></div></a>';
            }
        }
        break;
    }
    document.getElementById("noidung").innerHTML=s;
}
var chitietdienthoai=
[
    ['Super AMOLED, 6.4", Quad HD+ (2K+)','IPS LCD, 6.2", HD+','OLED, 6.5", Super Retina','OLED, 5.8", Super Retina','	Super AMOLED, 6.0", Full HD+','Super AMOLED, 6.2", Quad HD+ (2K+)','AMOLED, 6.42", Full HD+','AMOLED, 6.4", Full HD+','LED-backlit IPS LCD, 5.5", Retina HD'],
    ['Android 8.1 (Oreo)','	ColorOS 5.2 (Android 8.1)','iOS 12','iOS 11','Android 8.0 (Oreo)','Android 8.0 (Oreo)','Android 8.1 (Oreo)','ColorOS 5.2 (Android 8.1)','iOS 11'],
    ['2 camera 12 MP','13 MP và 2 MP (2 camera)','2 camera 12 MP','2 camera 12 MP','24 MP, 8 MP và 5 MP (3 camera)','2 camera 12 MP','20 MP và 16 MP (2 camera)','20 MP, 12 MP và TOF 3D (3 camera)','2 camera 12 MP'],
    ['8 MP','16 MP','7 MP','7 MP','24 MP','8 MP','25 MP','25 MP','7 MP'],
    ['Exynos 9810 8 nhân 64 bit','Qualcomm Snapdragon 450 8 nhân 64-bit','Apple A12 Bionic 6 nhân','Apple A11 Bionic 6 nhân','Exynos 7885 8 nhân 64-bit','Exynos 9810 8 nhân 64 bit','Snapdragon 845 8 nhân','Snapdragon 710 8 nhân 64-bit','Apple A10 Fusion 4 nhân 64-bit'],
    ['6 GB','4 GB','4 GB','3 GB','4 GB','6 GB','8 GB','8 GB','3 GB'],
    ['128 GB','64 GB','512 GB','256 GB','64 GB','64 GB','256 GB','128 GB','256 GB'],
    ['MicroSD, hỗ trợ tối đa 512 GB','MicroSD, hỗ trợ tối đa 256 GB','Không có','Không có','MicroSD, hỗ trợ tối đa 512 GB','MicroSD, hỗ trợ tối đa 400 GB','Không','Không','Không'],
    ['2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G','2 Nano SIM, Hỗ trợ 4G','Nano SIM & eSIM, Hỗ trợ 4G','1 Nano SIM, Hỗ trợ 4G','2 Nano SIM, Hỗ trợ 4G','2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G','2 Nano SIM, Hỗ trợ 4G','2 Nano SIM, Hỗ trợ 4G','1 Nano SIM, Hỗ trợ 4G'],
    ['3800 mAh, có sạc nhanh','4230 mAh','3174 mAh, có sạc nhanh','2716 mAh, có sạc nhanh','3300 mAh','3500 mAh, có sạc nhanh','3730 mAh, có sạc nhanh','3700 mAh, có sạc nhanh','2900 mAh']
];
var chitietlaptop=
[
    ['Intel Core i3 Kabylake, 7020U, 2.30 GHz','Intel Core i5 Kabylake Refresh, 8250U, 1.60 GHz','Intel Core i5 Kabylake Refresh, 8250U, 1.60 GHz','Intel Core i3 Kabylake, 7020U, 2.30 GHz','Intel Core i5 Coffee Lake, 8250U, 1.60 GHz','Intel Core i5 Kabylake Refresh, 2.30 GHz','Intel Core i5 Broadwell, 1.80 GHz','Intel Core i5 Kabylake, 3.10 GHz','Intel Core i3 Skylake, 6006U, 2.00 GHz','Intel Core i7 Kabylake Refresh, 8550U, 1.80 GHz','Intel Pentium, N5000, 1.10 GHz','Intel Core i7 Kabylake Refresh, 8550U, 1.80 GHz'],
    ['4 GB, DDR4 (On board +1 khe), 2133 MHz','4 GB, DDR4 (2 khe), 2400 MHz','4 GB, DDR4 (2 khe), 2133 MHz','4 GB, DDR4 (1 khe), 2133 MHz','4 GB, DDR4 (2 khe), 2400 MHz','8 GB, DDR3L(On board), 2133 MHz','8 GB, DDR3L(On board), 1600 MHz','8 GB, DDR3 (on board), 2133 MHz','4 GB, DDR4 (2 khe), 2400 MHz','8 GB, DDR4 (1 khe), 2400 MHz','4 GB, DDR4 (1 khe), 2400 MHz','	8 GB, DDR3 (on board), 2133 MHz'],
    ['HDD: 500 GB SATA3, Hỗ trợ khe cắm SSD M.2 SATA3','HDD: 1 TB','HDD: 1 TB, Hỗ trợ khe cắm SSD M.2 SATA3','HDD: 1 TB','HDD: 1 TB SATA3','SSD: 256 GB','SSD: 128 GB','SSD: 256 GB','HDD: 500 GB','HDD: 1 TB','HDD: 500 GB SATA3','SSD: 256 GB, M2, PCIe'],
    ['15.6 inch, Full HD (1920 x 1080)','15.6 inch, Full HD (1920 x 1080)','15.6 inch, Full HD (1920 x 1080)','14 inch, HD (1366 x 768)','15.6 inch, Full HD (1920 x 1080)','13.3 inch, Retina (2560 x 1600)','13.3 inch, WXGA+(1440 x 900)','13.3 inch, Retina (2560 x 1600)','14 inch, HD (1366 x 768)','13.3 inch, Full HD (1920 x 1080)','15.6 inch, HD (1366 x 768)','13.3 inch, Full HD (1920 x 1080)'],
    ['Card đồ họa tích hợp, Intel® HD Graphics 620','Card đồ họa tích hợp, Intel® UHD Graphics 620','Card đồ họa tích hợp, Intel® UHD Graphics 620','Card đồ họa tích hợp, Intel® HD Graphics 620','Card đồ họa rời, NVIDIA Geforce MX130, 2GB','Card đồ họa tích hợp, Intel Iris Plus Graphics 655','Card đồ họa tích hợp, Intel HD Graphics 6000','Card đồ họa tích hợp, Intel® Iris™ Plus Graphics 650','Card đồ họa tích hợp, Intel® HD Graphics 520','Card đồ họa tích hợp, Intel® UHD Graphics 620','	Card đồ họa tích hợp, Intel® HD Graphics','Card đồ họa tích hợp, Intel® UHD Graphics 620'],
    ['2 x USB 3.1, HDMI, LAN (RJ45), USB 2.0','HDMI 1.4, 2 x USB 3.0, LAN (RJ45), USB 2.0','2 x USB 2.0, HDMI, USB 3.0, USB Type-C','HDMI, USB 2.0, USB 3.0','2 x USB 2.0, HDMI, USB 3.0','4 x Thunderbolt 3 (USB-C)','MagSafe 2, 2 x USB 3.0, Thunderbolt 2','	4 x Thunderbolt 3 (USB-C)','2 x USB 3.0, HDMI, LAN (RJ45), USB 2.0, VGA (D-Sub)','2 x USB 3.0, HDMI, USB 2.0','2 x USB 3.1, HDMI, LAN (RJ45), USB 2.0','2 x USB 3.1, USB Type-C'],
    ['Windows 10 Home SL','Windows 10 Home SL','Windows 10 Home SL','Windows 10 Home SL','Windows 10 Home SL','Mac OS','Mac OS','Mac OS','Windows 10 Home SL','Windows 10 + Office 365 1 năm','Windows 10 Home SL','Windows 10 Home SL'],
    ['Vỏ nhựa, PIN liền','Vỏ nhựa, PIN rời','Vỏ nhựa - nắp lưng bằng kim loại, PIN liền','Vỏ nhựa, PIN liền','Vỏ nhựa, PIN liền','Vỏ kim loại nguyên khối, PIN liền','Vỏ kim loại nguyên khối, PIN liền','Vỏ kim loại nguyên khối, PIN liền','Vỏ nhựa, PIN rời','Vỏ nhựa, PIN liền','Vỏ nhựa, PIN liền','Vỏ kim loại, PIN liền'],
    ['Dày 22.5 mm, 1.77 kg','Dày 23.65 mm, 2.3 Kg','Dày 17.9 mm, 1.5 kg','Dày 21.9 mm, 1.5 kg','1.8kg','Dày 14.9 mm, 1.37 kg','Dày 17 mm, 1.35 Kg','Dày 14.9 mm, 1.37 kg','Dày 23.4 mm, 1.95 kg','Dày 19.5 mm, 1.62 kg','Dày 22.5 mm, 1.77 kg','Dày 15 mm, 1.2 kg']
]
var chitiettablet=
[
    ['IPS LCD, 10.5"','LED backlit LCD, 9.7"','IPS LCD, 10.5"','Super AMOLED, 10.5"','IPS LCD, 8"','IPS LCD, 8"','PLS LCD, 10"','IPS LCD, 7"','TFT LCD, 7"'],
    ['Android 8.0','iOS 11.3','iOS 11','Android 8.0','Android 7.0','Android 7.0','Android 7.0','Android 7.0','Android 5.1'],
    ['CPU 8 nhân, 1.8 GHz','Apple A10 Fusion, 2.34 GHz','Apple A10X 6 nhân 64-bit','Qualcomm MSM 8998, 4 nhân 2.35GHz + 4 nhân 1.9GHz','Qualcomm MSM8940, 1.4 GHz','Qualcomm MSM8917, 1.4 GHz','Qualcomm MSM8917, 1.4 GHz','MediaTek MT 8735D 4 nhân, 1.1 GHz','CPU 4 nhân, 1.5 GHz'],
    ['3 GB','2 GB','4 GB','4 GB','3 GB','2 GB','2 GB','1 GB','1.5 GB'],
    ['32 GB','32 GB','64 GB','64 GB','32 GB','16 GB','16 GB','16 GB','8 GB'],
    ['8 MP','8 MP','12 MP','13 MP','8 MP','5 MP','5 MP','2 MP','5 MP'],
    ['5 MP','1.2 MP','7 MP','8 MP','8 MP','2 MP','2 MP','2 MP','2 MP'],
    ['WiFi, 3G, Hỗ trợ 4G','WiFi, Không hỗ trợ 3G, Không hỗ trợ 4G','WiFi, 3G, 4G LTE','WiFi, 3G, Hỗ trợ 4G','WiFi, 3G, 4G LTE','WiFi, 3G, 4G LTE','WiFi, 3G, 4G LTE','WiFi, 3G, 4G LTE','WiFi, 3G, 4G LTE'],
    ['Có','FaceTime','FaceTime','Có','Có','Có','Có','Có','Có']
]
function bb()
{
    var url = window.location.href;
    var params = url.split('?');
    var s='';
    for(i=0; i<dienthoai[0].length; i++)
    {
        if(params[1]==dienthoai[0][i].replace(/ /g,"-"))
        {
            s=s+'<img class="imgct" src="image/'+dienthoai[2][i]+'">';
            s=s+'<div class="tengia">';
            s=s+'<div class="tensp">'+dienthoai[0][i]+'</div>';
            s=s+'<b class="giasp">'+dienthoai[1][i]+'₫</b>';
            s=s+'<b style="margin-left:20px">KHUYẾN MÃI</b>'
            s=s+'<div style="width=100%; float:left; margin-left:30px">Khách hàng có thể mua trả góp sản phẩm với lãi suất 0% với thời hạn 6 tháng kể từ khi mua hàng.</div>'
            s=s+'<div style="width=100%"><a onClick="luuGioHang(), hienThiVaoGio()" class="themgiohang">Thêm vào giỏ hàng</a></div>';
            s=s+'</div>';
            s=s+'<table>';
            s=s+'<tr><td style="text-align: center" colspan="2"><b>Thông số kĩ thuật</b><hr></td></tr>';
            s=s+'<tr><td class="thuoctinh">Màn hình:</td><td>'+chitietdienthoai[0][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Hệ điều hành:</td><td>'+chitietdienthoai[1][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Camera sau:</td><td>'+chitietdienthoai[2][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Camera trước:</td><td>'+chitietdienthoai[3][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">CPU:</td><td>'+chitietdienthoai[4][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">RAM:</td><td>'+chitietdienthoai[5][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Bộ nhớ trong:</td><td>'+chitietdienthoai[6][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Thẻ nhớ:</td><td>'+chitietdienthoai[7][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Thẻ SIM:</td><td>'+chitietdienthoai[8][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Dung lượng pin:</td><td>'+chitietdienthoai[9][i]+'</td></tr>';
            s=s+'</table>';
        }
    }
    for(i=0; i<laptop[0].length; i++)
    {
        if(params[1]==laptop[0][i].replace(/ /g,"-"))
        {
            s=s+'<img class="imgct" src="image/'+laptop[2][i]+'">';
            s=s+'<div class="tengia">';
            s=s+'<div class="tensp">'+laptop[0][i]+'</div>';
            s=s+'<b class="giasp">'+laptop[1][i]+'₫</b>';
            s=s+'<b style="margin-left:20px">KHUYẾN MÃI</b>'
            s=s+'<div style="width=100%; float:left; margin-left:30px">Khách hàng có thể mua trả góp sản phẩm với lãi suất 0% với thời hạn 6 tháng kể từ khi mua hàng.</div>'
            s=s+'<div style="width=100%"><a onClick="luuGioHang(), hienThiVaoGio()"  class="themgiohang">Thêm vào giỏ hàng</a></div>';
            s=s+'</div>';
            s=s+'<table>';
            s=s+'<tr><td style="text-align: center" colspan="2"><b>Thông số kĩ thuật</b><hr></td></tr>';
            s=s+'<tr><td class="thuoctinh">CPU:</td><td>'+chitietlaptop[0][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">RAM:</td><td>'+chitietlaptop[1][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Ổ cứng:</td><td>'+chitietlaptop[2][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Màn hình:</td><td>'+chitietlaptop[3][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Card màn hình:</td><td>'+chitietlaptop[4][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Cổng kết nối:</td><td>'+chitietlaptop[5][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Hệ điều hành:</td><td>'+chitietlaptop[6][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Thiết kế:</td><td>'+chitietlaptop[7][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Kích thước:</td><td>'+chitietlaptop[8][i]+'</td></tr>';
            s=s+'</table>';
        }
    }
    for(i=0; i<tablet[0].length; i++)
    {
        if(params[1]==tablet[0][i].replace(/ /g,"-"))
        {
            s=s+'<img class="imgct" src="image/'+tablet[2][i]+'">';
            s=s+'<div class="tengia">';
            s=s+'<div class="tensp">'+tablet[0][i]+'</div>';
            s=s+'<b class="giasp">'+tablet[1][i]+'₫</b>';
            s=s+'<b style="margin-left:20px">KHUYẾN MÃI</b>'
            s=s+'<div style="width=100%; float:left; margin-left:30px">Khách hàng có thể mua trả góp sản phẩm với lãi suất 0% với thời hạn 6 tháng kể từ khi mua hàng.</div>'
            s=s+'<div style="width=100%"><a onClick="luuGioHang(), hienThiVaoGio()" class="themgiohang">Thêm vào giỏ hàng</a></div>';
            s=s+'</div>';
            s=s+'<table>';
            s=s+'<tr><td style="text-align: center" colspan="2"><b>Thông số kĩ thuật</b><hr></td></tr>';
            s=s+'<tr><td class="thuoctinh">Màn hình:</td><td>'+chitiettablet[0][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Hệ điều hành:</td><td>'+chitiettablet[1][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">CPU:</td><td>'+chitiettablet[2][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">RAM:</td><td>'+chitiettablet[3][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Bộ nhớ trong:</td><td>'+chitiettablet[4][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Camera sau:</td><td>'+chitiettablet[5][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Camera trước:</td><td>'+chitiettablet[6][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Kết nối mạng:</td><td>'+chitiettablet[7][i]+'</td></tr>';
            s=s+'<tr><td class="thuoctinh">Đàm thoại:</td><td>'+chitiettablet[8][i]+'</td></tr>';
            s=s+'</table>';
        }
    }
    for(i=0; i<phukien[0].length; i++)
    {
        if(params[1]==phukien[0][i].replace(/ /g,"-"))
        {
            s=s+'<img class="imgct" src="image/'+phukien[2][i]+'">';
            s=s+'<div class="tengia">';
            s=s+'<div class="tensp">'+phukien[0][i]+'</div>';
            s=s+'<b class="giasp">'+phukien[1][i]+'₫</b>';
            s=s+'<b style="margin-left:20px">KHUYẾN MÃI</b>'
            s=s+'<div style="width=100%; float:left; margin-left:30px">Khách hàng có thể mua trả góp sản phẩm với lãi suất 0% với thời hạn 6 tháng kể từ khi mua hàng.</div>'
            s=s+'<div style="width=100%"><button onClick="luuGioHang(), hienThiVaoGio()" class="themgiohang">Thêm vào giỏ hàng</button></div>';
            s=s+'</div>';
        }
    }
    document.getElementById("noidung").innerHTML=s;
}
function timkiem()
{
    var s='';
    s=s+'<div class="loai">&nbsp</div>';
    var a=document.getElementById('search').value;
    for(i=0; i<dienthoai[0].length; i++)
    {
        if(dienthoai[0][i].toLocaleUpperCase().indexOf(a.toLocaleUpperCase())>=0)
        {
            s=s+'<a href="chitietsanpham.html?'+dienthoai[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+dienthoai[2][i]+'" width="100%" height="60%"/><p>'+dienthoai[0][i]+'</p><hr><p><b class="gia">'+dienthoai[1][i]+'</p></b></div></a>';
        }
    }
    for(i=0; i<laptop[0].length; i++)
    {
        if(laptop[0][i].toLocaleUpperCase().indexOf(a.toLocaleUpperCase())>=0)
        {
            s=s+'<a href="chitietsanpham.html?'+laptop[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+laptop[2][i]+'" width="100%" height="60%"/><p>'+laptop[0][i]+'</p><hr><p><b class="gia">'+laptop[1][i]+'</p></b></div></a>';
        }
    }
    for(i=0; i<tablet[0].length; i++)
    {
        if(tablet[0][i].toLocaleUpperCase().indexOf(a.toLocaleUpperCase())>=0)
        {
            s=s+'<a href="chitietsanpham.html?'+tablet[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+tablet[2][i]+'" width="100%" height="60%"/><p>'+tablet[0][i]+'</p><hr><p><b class="gia">'+tablet[1][i]+'</p></b></div></a>';
        }
    }
    for(i=0; i<phukien[0].length; i++)
    {
        if(phukien[0][i].toLocaleUpperCase().indexOf(a.toLocaleUpperCase())>=0)
        {
            s=s+'<a href="chitietsanpham.html?'+phukien[0][i].replace(/ /g,"-")+'"><div class="sanpham"><img src="image/'+phukien[2][i]+'" width="100%" height="60%"/><p>'+phukien[0][i]+'</p><hr><p><b class="gia">'+phukien[1][i]+'</p></b></div></a>';
        }
    }
    document.getElementById("noidung").innerHTML=s;
}



function checkSignUp()
{
	var a=1,i=1;
	user1 = document.getElementById('user1').value;
	pass1 = document.getElementById('pass1').value;
	while(a == 1)
	{
        if(localStorage.getItem('tenTK'+i) == user1)
		{
			alert("Tài khoản này đã được sử dụng! Vui lòng đăng ký tài khoản khác!");
            a=0;
		}
		if(localStorage.getItem('tenTK'+i) == null)
		{
			localStorage.setItem('tenTK'+i,user1);
			localStorage.setItem('tenTK'+'MK'+i, pass1);
            alert("Đăng ký tài khoản thành công");
			a=0;
		}
		i++;
	}
}
function checkLogin()
{
	var i = 1;
	user2 = document.getElementById('user2').value;
	pass2 = document.getElementById('pass2').value;
	while (true) 
	{
		if (localStorage.getItem('tenTK'+i) == user2 || localStorage.getItem('tenTK'+i) == null)
			break;
		i++;
	}

	if (localStorage.getItem('tenTK'+i) == null) 
	{
		alert ("Tài khoản này chưa được đăng ký!");
        location.reload();
		return false;
	}

	if (localStorage.getItem ('tenTK'+'MK'+i) != pass2)
	{
		alert ("Tên tài khoản hoặc mật khẩu không chính xác!");
        location.reload();
		return false;
	}
	else
	{
		localStorage.setItem ('currentUser', user2);
		return false;
	}
}


function loggout()
{
	location.reload();
	return localStorage.removeItem('currentUser');
}
function xoaGioHang()
{
    alert("Đã xóa giỏ hàng!")
    for(i = 0; i<10; i++)
    {
        localStorage.removeItem('tenLT'+i);
        localStorage.removeItem('giaLT'+i);
        localStorage.removeItem('tenDT'+i);
        localStorage.removeItem('giaDT'+i);
        localStorage.removeItem('tenTL'+i);
        localStorage.removeItem('giaTL'+i);
        localStorage.removeItem('tenPK'+i);
        localStorage.removeItem('giaPK'+i);
    }
	location.reload();
}
function xoaGioHang2()
{
    for(i = 0; i<10; i++)
    {
        localStorage.removeItem('tenLT'+i);
        localStorage.removeItem('giaLT'+i);
        localStorage.removeItem('tenDT'+i);
        localStorage.removeItem('giaDT'+i);
        localStorage.removeItem('tenTL'+i);
        localStorage.removeItem('giaTL'+i);
        localStorage.removeItem('tenPK'+i);
        localStorage.removeItem('giaPK'+i);
    }
	location.reload();
}

function thanhToan()
{
    if(localStorage.getItem ('currentUser') != null)
    {
        alert("Cảm ơn bạn đã mua hàng!");
        location.reload();
        xoaGioHang2();
    }
    else
        alert("Vui lòng đăng nhập để mua hàng!");
}


function signin()
{
	var a ="",b="", c="";
    localStorage.setItem('tenTK1',"admin");
    localStorage.setItem('tenTKMK1',"admin");  
    if(localStorage.getItem('currentUser') == localStorage.getItem('tenTK1'))
       {
       c +=`<div>
            <a href="admin.html"><button style="width:auto">Quản lý Website</button></a>
            <button onClick="loggout()" style="width:auto">Thoát</button>
            </div>`;
       document.getElementById("taikhoan").innerHTML = c;
       }
    else if(localStorage.getItem ('currentUser') != null)
	{
		a = localStorage.getItem ('currentUser');
		b +=`<span onClick="loggout()">Thoát</span>
        <button onClick="document.getElementById('id03').style.display='block'" style = "width:auto"><img src="image/cart.png" width="16px" height="16px" /></button>`;
		document.getElementById("taikhoan").innerHTML = "<span>Xin chào "+a+" | "+b+"</span>";
	}
	else
	{
		c += `
		<div>
		<button onClick="document.getElementById('id01').style.display='block'" style="width:auto; margin-top: 5px;">Đăng Nhập</button>
		<button onClick="document.getElementById('id02').style.display='block'" style="width:auto";>Đăng Ký</button>
        <button onClick="document.getElementById('id03').style.display='block'" style = "width:auto; "><img src="image/cart.png" width="17px" height="17px"  /></button>
        </div>`;
		document.getElementById("taikhoan").innerHTML = c;
	}
}
var myIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


