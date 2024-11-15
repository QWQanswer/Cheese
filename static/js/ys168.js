/// <reference path="jquery.js" />
/// <reference path="ysck.js" />

function $i(id, rhtml) { $id(id).innerHTML = rhtml; return; }
function $id(id) { if (typeof (id) != "string") return id; return document.getElementById(id); }
var $bm = function (r) { r = r.replace(/\+/g, "%2B"); return encodeURIComponent(r); };
var $jm = function (r) { return unescape(decodeURIComponent(r)); };
function $_(r) { return typeof r == "undefined"; }
function $_s(r) { return typeof r == "string"; }
function vre(z1, z2, z3) { jgzz = z1.replace(new RegExp(z2, "g"), z3); return jgzz; }
//function $jm64(r) { return decodeURIComponent(escape(window.atob(r))); }   //base64解码  不支持IE9
//function $bm64(r) { return window.btoa(unescape(encodeURIComponent(r))); }  //base64编码  不支持IE9

function $jm64(r) { if (r == "") { return ""; } return decodeURIComponent(escape(_atob(r))); }   //base64解码。6022里编码
function $bm64(r) { if (r == "") { return "";} return _btoa(unescape(encodeURIComponent(r))); }

function _btoa(r) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var result = '';
    var i = 0;
    do {
        var a = r.charCodeAt(i++);
        var b = r.charCodeAt(i++);
        var c = r.charCodeAt(i++);
        a = a ? a : 0;
        b = b ? b : 0;
        c = c ? c : 0;
        var encoded1 = a >> 2;
        var encoded2 = ((a & 3) << 4) | (b >> 4);
        var encoded3 = ((b & 15) << 2) | (c >> 6);
        var encoded4 = c & 63;
        if (isNaN(b)) {
            encoded3 = encoded4 = 64;
        } else if (isNaN(c)) {
            encoded4 = 64;
        }
        result += characters.charAt(encoded1) + characters.charAt(encoded2) + characters.charAt(encoded3) + characters.charAt(encoded4);
    } while (i < r.length);
    return result;
}
function _atob(r) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    r = r.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < r.length) {
        enc1 = keyStr.indexOf(r.charAt(i++));
        enc2 = keyStr.indexOf(r.charAt(i++));
        enc3 = keyStr.indexOf(r.charAt(i++));
        enc4 = keyStr.indexOf(r.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output += String.fromCharCode(chr1);
        if (enc3 !== 64) {
            output += String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
            output += String.fromCharCode(chr3);
        }
    }
    return output;
}


var _AJ = function (rdz, rdata, rfun, rfun_err) {

    if (typeof rdz != "string") { console.log("_AJ,dz不合法" + rdz); return; }
    var method = "GET";
    if ($.isFunction(rdata)) { rfun_err = rfun; rfun = rdata; rdata = null; }
    if (!rdata || typeof rdata == "undefined") rdata = null; else method = "POST";
    if (rdz.indexOf("http:") != 0) {
        rdz = rdz + "&_dlmc=" + _kj.dlmc + "&_dlmm=" + _kj._dlmm;
    }

    frxcx.XMLHttp.sendReq(method, rdz, rdata, rfun, rfun_err);
    _dqtx.jc();

};

function AJ(rdz, rcallback, rdata, rcallback_err) {
    _AJ(rdz, rdata, rcallback, rcallback_err);

}

//数据更新从xxtx转移到此
function gxxx(r) {
    var sz1 = r.split(";");
    for (var i = 0; i < sz1.length; i++) {
        if (sz1[i].length === 0) continue;
        var sz2 = sz1[i].split(",");
        var s1 = sz2[0];
        var nml = 0; var sml = "";
        if (sz2.length > 1) { nml = sz2[1]; }

        switch (s1.substr(0, 1)) {
            case "L": { _gxxl.lyb = true; } break;
            case "M": { _gxxl.ml = true; if (nml != 0) { _gxxl.addwj(nml); } } break;
            case "W": { _gxxl.addwj(nml); } break;
        }
    }
    _gxxl.gx();
}

var _ev = {
    lb: [],
    dy: function (rmc, rev) {
        if (!$_s(rev)) { alert("只接收字符型订阅"); console.log(rev); return; }
        var ev = this.f(rmc); var pd = false;
        for (var i = 0; i < ev.lb.length; i++) { if (ev.lb[i] == rev) { pd = true; break; } }
        if (!pd) { ev.lb.push(rev); }
    },
    cf: function (rmc, rcs) {
        var ev = this.f(rmc); ev.cs = rcs;
        $.each(ev.lb, function () {
            var s1 = this; var zxpd = true;
            if (s1.length > 2 && s1.substr(0, 2) == "F_") {
                var ck = _ck.find(s1.substr(2).split(".")[0]);
                if (ck) { if (!ck.iskq) zxpd = false; }
            }
            if (zxpd) { setTimeout(this + "('" + rcs + "')", 100); }
        });
    },
    f: function (rmc) {
        var o = null; $.each(_ev.lb, function () { if (this.mc == rmc) { o = this; return false; } });
        if (!o) { o = { mc: rmc, lb: [], cs: null }; this.lb.push(o); }; return o;
    },
    xs: function () {
        $.each(this.lb, function () { console.log("事件:" + this.mc + "" + (this.cs ? "参数:" + this.cs : "")); console.log(this.lb); });
    }
};

var _ym = {
    oml: null, czqcd: [], czqnr: [], czqxh: -1,
    cssz: function () {
        this.oml = $("#menuList");
        this.czqcd = $("#ysmenu").children();
        this.czqnr = $("#ysmenu1").children();
        this.evset();
        this.czqzt();
        _ml.dq();
    },
    dw: function (ro) {
        ro = $(ro).get(0);
        var d0 = $id("dzx").offsetHeight;
        if ($id("dzx").scrollTop + d0 <= ro.offsetTop || $id("dzx").scrollTop >= ro.offsetTop) { $id("dzx").scrollTop = ro.offsetTop - 100; }
    },
    evset: function () {
        this.czqcd.on("click", function () { _ym.qhczq($(this).index()); });
        this.oml.on("click", ".yyck", function () { _ym.zsck(this); });
        this.oml.on("click", ".ml", function () { _ml.dj($(this).parent()); });
        this.oml.on("click", "a", function () {
            var p = $(this).parent();
            if (p.hasClass("zml")) { _zml.dj(p); return; }
            if (p.hasClass("lxtsa")) {
                myConfirm("确认", "请确认是否重新读取文件数据", function (r) { if (r) { _wj.dq(); } });
            }
            if (p.hasClass("lxtsb")) {
                if (!_yh.gly) { alert("请在管理区登录后再进行操作。"); return; }
                myConfirm("确认", "请确认是否查看文件详情", function (r) { if (r) { _wj.dq(-1); } });
            }
            if (p.hasClass("xwj")) {
                var jzlx = $(this).attr("data-jz");
                if (jzlx) {
                    _ck.set("ck/jzsm.html", { w: 340, h: 220 }).open(jzlx);
                }

                //var fdurl = $(this).attr("data-url");
                //if (!_yh.gly) { _ck.set("ck/downwj.html", { w: 483, h: 314 }).open([fdurl, $(this).html(), window.location.host, $(this).next().html()]); }

                //var fdurl = $(this).attr("data-url");
                //if (fdurl) { _ck.set("ck/fdsm.html", { w: 483, h: 314 }).open([fdurl, $(this).html()]); }
                ////////////////cccpan的下载文件窗口
                //var fdurl2 = $(this).attr("data-url2");
                //if (fdurl2) { _ck.set("ck/fdsm2.html", { w: 483, h: 280 }).open([fdurl2, $(this).html(), window.location.host]); }
            }
        });
        this.oml.on("click", ".bjtb", function () {
            var p = $(this).parent();
            if (p.hasClass("gml")) {
                if (!_yh.gly) { alert("请在管理区登录后再进行操作。"); return; }
                var _mlid = p.attr("id");
                if (_mlid.length < 4) { return; }
                _ck.set("ck/ml.html", { w: 360, h: 410, v: "0.1" }).open(_mlid.substring(3));
                return;
            }
            if (p.hasClass("zml") || p.hasClass("xwj") || p.hasClass("xlj") || p.hasClass("xwz") || p.hasClass("xyc")) {
                if (!_yh.gly) { if (!_mlxx.find().bj) { alert("抱歉，您没有编辑此项数据的权限。"); return; } }
                _ck.set("ck/bjwj.html", { w: 340, h: 230, v: "1" }).open(this);
            }
        });

        if (_kj.qxzx || _yh.gly) { $("#sp_zx").show(); }
        $id("buexit").onclick = function () { _yh.exit(); };
    },

    zsck: function (r) {
        r = $(r).parent();
        var lx = r.data("ck");
        var id = r.get(0).id;
        if (lx == "1" || lx == "4") { _ck.set("ck/cktp.html", { w: 500, h: 400 }).open(id); return; }
        if (lx == "2") {
            var wjm1 = r.children("a").eq(0).html();
            var hw1 = 500; var hh1 = 400;
            if (wjm1.substring(wjm1.lastIndexOf(".")) == ".mp3") { hh1 = 110; hw1 = 300; }
            _ck.set("ck/cksp.html", { w: hw1, h: hh1, v: "151" }).open(id);
            return;
        }
        if (lx == "3") {
            var wdz = $(r).children("a").eq(0).attr("href");
            //var ckwb = _ck.set("ys_wbck_ck", { w: 500, h: 400, lx: "wb" });
            //ckwb.bt = $(r).children("a").eq(0).html();
            //ckwb.open(wdz);
            var z = { dz: wdz, wjm: $(r).children("a").eq(0).html() };
            _ck.set("ck/ckwb.html", { w: 500, h: 400 }).open(z);
            return;
        }
    },
    qhczq: function (r) {
        this.czqxh = r;
        $(this.czqcd).eq(r).addClass("dqcd").siblings().removeClass("dqcd");
        $(this.czqnr).eq(r).show().siblings().hide();
        if (r == 0) { $id("xm").focus(); }
        if (r == 2) {
            var a1 = $(_ym.czqnr).eq(2).children();
            if (_ml.dqxz <= 0) {
                a1.eq(1).find("p").html("请打开或者新建一个目录");
                a1.eq(1).show().siblings().hide(); return;
            }
            if (!_yh.gly && !_mlxx.find().sc) {
                a1.eq(1).find("p").html("此目录未开通访客上传权限");
                a1.eq(1).show().siblings().hide(); return;
            }
            a1.eq(0).show().siblings().hide();
            //if (!_yh.gly && !_kj.qxsc) { $id("buzml").disabled = true; }
        }
    },
    czqzt: function () {
        _ym.anzt("buxz", _yh.gly || _kj.qxxzjl);
        _ym.anzt("buzx", _yh.gly || _kj.qxzx);
        _ym.anzt("buly", _yh.gly || _kj.qxly > 0);
        _ym.anzt("sutjbt", _yh.gly || _kj.qxml);
        _ym.anzt("sutjbt2", _yh.gly || _kj.qxml);

        if (_yh.gly || _kj.qxml) {
            $("#ysmenu1").children().eq(1).children().eq(0).html("增加目录时，可对目录权限进行设置。");
        } else {
            $("#ysmenu1").children().eq(1).children().eq(0).html("禁止访客增加目录，管理员请在管理区登录后操作。");
        }

        var mb = $(_ym.czqnr[3]).children();
        if (_yh.gly) {
            $(mb[0]).hide(); $(mb[1]).show();
        } else {
            $(mb[1]).hide(); $(mb[0]).show();
        }
    },
    ymqx: function () {
        _ym.anzt("buxz", _kj.qxxzjl);
        _ym.anzt("buzx", _kj.qxzx);
    },
    //按钮状态
    anzt: function (rid, rzt) {
        if (rzt) {
            $("#" + rid).css("text-decoration", "none");
            if (rid == "buxz") {
                $id("buxz").onclick = function () { _ck.set("ck/xzlb.html", { w: 750, h: 600 }).open(); };
            } else if (rid == "buzx") {
                $id("buzx").onclick = function () { _ck.set("ck/zxlb.html", { w: 350, h: 300, v: "0.1" }).open(); };
            } else if (rid == "buly") {
                $id("buly").onclick = function () { _lyb.tj(); };
                $("#nr").removeAttr("readonly").removeAttr("placeholder");
                $("#xm").removeAttr("readonly");
            } else if (rid == "sutjbt" || rid == "sutjbt2") {
                $id(rid).onclick = function () { _ck.set("ck/ml.html", { w: 360, h: 410 }).open(0); };
            }
        } else {
            $("#" + rid).css("text-decoration", "line-through");
            if (rid == "buxz") {
                $id("buxz").onclick = function () { alert("未开放访客查看下载记录权限"); };
            } else if (rid == "buzx") {
                $id("buzx").onclick = function () { alert("未开放访客查看在线数据权限"); };
            } else if (rid == "buly") {
                $id("buly").onclick = function () { alert("未开放访客增加留言权限"); };
                if (_kj.qxly <= 0) { $("#nr").attr("readonly", "readonly").attr("placeholder", "未开放访客留言权限"); $("#xm").attr("readonly", "readonly"); }
            } else if (rid == "sutjbt" || rid == "sutjbt2") {
                $id(rid).onclick = function () { alert("请管理员登录管理区后进行操作"); };
            }
        }
    },
    bgsz: function (rid, rz) {
        if ($(rid).html() == "-") { $(rid).html(rz); return; }
        if (rz == $(rid).html()) return;
        var cjl = $(rid).get(0).style.color;
        if ($(rid).get(0).style.color == "red") return;
        $(rid).get(0).style.color = "red";
        setTimeout("$('" + rid + "').get(0).style.color='" + cjl + "';$('" + rid + "').html('" + rz + "');", 1000);

    },
    changelx: function (pd) {
        if ($id("idwj" + pd).style.display == "block") return;
        for (var i = 1; i <= 4; i++) { $id("idwj" + i).style.display = "none"; }
        $id("idwj" + pd).style.display = "block";
        if (pd == 3) $id("tezml").focus();
        if (pd == 2) $id("scbt2").focus();
        if (pd == 4) $id("scbt4").focus();
    },
    kqsc: function () {
        _ck.set("ck/scjd.html", { w: 490, h: 360, v: "0.2" }).open();
    }
};
_ev.dy("glyzt", "_ym.czqzt");

_kj.gxsyl = function (r) {
    _kj.kjsyl = r * 1;
    _ym.bgsz("#kjz2", r);
};

_kj.llcxcl = function (r) {
    if (_kj.llcx != r) { _kj.llcx = r; _ck.set("ck/xxtx.html", { w: 300, h: 220 }).open("A_LL"); }
};
_kj.cjzscxx = function (r) {
    if (_kj.jzscxx != r) {
        _kj.jzscxx = r;
        if (r != "") {
            $.each(_mlxx.lb, function (i, o) { o.scpz = ""; });
        }
    }
};
_kj.cjzxzlx = function (r) {
    if (_kj.jzxzlx != r) {
        _kj.jzxzlx = r;
        _wj.gxcl();
    }
};

var _gxxl = {
    lyb: false, ml: false, wj: [],
    addwj: function (mlbh) {
        var pd = false;
        $.each(_gxxl.wj, function (i, o) { if (o == mlbh) { pd = true; return false; } });
        if (!pd) { _gxxl.wj.push(mlbh); }
    },
    gx: function () {
        if (_gxxl.lyb) { _gxxl.lyb = false; _lyb.dq(1); return; }
        if (_gxxl.ml) { _gxxl.ml = false; _ml.dq(); return; }
        $.each(_gxxl.wj, function (i, o) { if (o == _ml.dqxz) { _wj.dq(); } else { _mlxx.find(o).gxpd = true; _zdy.gx(o); } });
        _gxxl.wj = [];
    }
};

var _yh = {
    gly: false,
    bgglzt: function (r) {
        if (this.gly != r) {
            this.gly = r;
            _ev.cf("glyzt");
            if (this.gly) {
                if (_kj.sj == "0") { _ck.set("ck/sjts.html", { w: 450, h: 250 }).open(); } else { _ck.set("ck/glts.html", { w: 350, h: 200 }).open();}
                //_AJ("qt.aspx?cz=Jsq", function (r) { $("#kj_jsq").html(r); });
            }
            $("#menuList").children(".gml").each(function (i, o) {
                if ($(o).find(".xyc").length > 0) { _mlxx.find(_ml.fx(o).mlbh).gxpd = true; }
            });
            _wj.gxcl();
            _wj.dq();
        }
        
        var sglmc = (cn == "0") ? "Manage" : "管理区";
        //$id("buzml").disabled = false;
        $("#sm_zml").html("支持增加多级子目录");
        if (_yh.gly) {
            $("#ysmenu").children().eq(3).html("<label style='color:green;'>*" + sglmc + "*</label>");
            //$("#sp_jsq").show();
            $id("bdgkpdlyb").checked = true;
            $id("pdgklj").checked = true;
            $id("pdgkwz").checked = true;
        } else {
            $("#ysmenu").children().eq(3).html(sglmc);
            //$("#sp_jsq").hide();
            $id("bdgkpdlyb").checked = false;
            $id("pdgklj").checked = true;
            $id("pdgkwz").checked = true;
            if (!_kj.qxsc) {
                //$id("buzml").disabled = true;
                //$("#sm_zml").html("抱歉，访客不支持增加子目录");
                $id("pdgkwz").checked = false; $id("pdgklj").checked = false;
            }
        }
        if (_kj.qxzx || _yh.gly) { $("#sp_zx").show(); } else { $("#sp_zx").hide(); }
    },
    dl: function (ryzm) {
        var mm = $("#bdglymm");
        if (mm.val() == "") {
            alert((cn == "0") ? "Please fill in the manager password!" : "请填写管理员密码！");
            mm.focus();
            return false;
        }
        var _dmm = mm.val().replace(/\+/g, "%2B");
        _AJ("gly.aspx?cz=dl&yzm=" + ryzm, "glmm=" + encodeURIComponent(_dmm));
    },
    tcgl: function () { _AJ("gly.aspx?cz=tc"); },
    exit: function () {
        var sdz = window.location.host;
        _AJ("qt.aspx?cz=tc", function (r) {
            window.location = "http://" + sdz + "/exit.aspx?dlmc=" + _kj.dlmc;
        });

    }
};
var _zdy = {
    bh: -1, olb: [], lbxh: 0, timer1: -1, jldz: "",
    gx: function (rmlbh) {
        if (!rmlbh) rmlbh = _ml.dqxz;
        if (rmlbh != _zdy.bh) return;
        _zdy.dq();
    },
    cbh: function (r) {
        if (this.bh == r) return;
        _zdy.bh = r;
        if (this.bh < 0) {
            $("#idzdy").hide();
            return;
        }
        $("#idzdy").show();
        this.dq();
    },
    dq: function () {
        $("#idzdy").html("正在读取...");
        _AJ("zdy.aspx?cz=Dqzdy&zdybh=" + _zdy.bh + "&html5=" + ((typeof (Worker) !== "undefined") ? 1 : 0), function (r) {
            _zdy.jldz = "";
            r = $jm64(r);
            $("#idzdy").html(r); _zdy.lbjc();
        }, function (r) {
            $("#idzdy").html("<font color=red>" + r + "</font>");
        });
    },

    lxbf: function (ro1) {
        if (!$("#yb_lbxz").prop("checked")) { return; };
        ro = $(ro1);
        var dqdz = ro.attr("src");
        if (_zdy.jldz == "") _zdy.jldz = dqdz; var nxh = -1;
        var axl = (_zdy.jldz + ro.data("wj")).split("|");
        $.each(axl, function (i, o) {
            if (o == "") return true;
            if (o == dqdz) { nxh = i; return false; }
        });
        nxh++; if (nxh > axl.length - 1) nxh = 0;
        ro.parent().find("span").html((nxh + 1) + "\/" + axl.length)
        ro1.src = axl[nxh];
        ro1.play();
    },

    lbjc: function () {
        this.olb = $("#idzdy .zdydb");
        if (this.olb.length <= 0) { return; }
        var h = this.olb.children("img").eq(0).height();
        if (h > 0) { this.lbjc1(h); } else {
            this.olb.children("img").eq(0).load(function () { _zdy.lbjc1($(this).height()); });
        }

    },
    lbjc1: function (h) {
        this.olb.children("img").each(function () { $(this).height(h); });
        this.lbxh = -1;
        window.clearInterval(_zdy.timer1);
        _zdy.timer1 = window.setInterval("_zdy.lbjc2()", 8000);

    },
    lbjc2: function () {
        var lb = this.olb.children("img");
        this.lbxh += 1;
        var n = this.lbxh + 1;
        if (this.lbxh == lb.length - 1) { n = 0; }
        if (this.lbxh > lb.length - 1) { this.lbxh = 0; n = 1; }
        lb.eq(this.lbxh).fadeOut("slow", function () { lb.eq(n).fadeIn("slow"); });
    }
};
var _mlxx = {
    scdz: "",
    lb: [],
    find: function (rmlbh) {
        if (!rmlbh) rmlbh = _ml.dqxz;
        rmlbh = rmlbh * 1;
        var xh = -1;
        $.each(_mlxx.lb, function (i, o) { if (_mlxx.lb[i].mlbh == rmlbh) { xh = i; return false; } });
        if (xh < 0) {
            _mlxx.lb.push({
                mlbh: rmlbh,
                sx: "",
                kqmm: false, ck: false, xz: false, sc: false, bj: false,
                //fqqx: null,
                scpz: "",
                isdq: false,
                gxpd: false,//如果需要更新，则改变此值 
                dqsj: new Date().getTime(),
                xzzt: true,
                isgq: function () {
                    var n1 = (new Date().getTime() - this.dqsj) / 1000 / 60;
                    return n1 > 60;
                }
            });
            xh = _mlxx.lb.length - 1;
        }
        return _mlxx.lb[xh];
    },
    dqpd: function (rmlbh) {
        if (!rmlbh) { rmlbh = _ml.dqxz; }
        if (rmlbh <= 0) { return false; }
        var o = _mlxx.find(rmlbh);

        if (!o.isdq) return true;
        if (o.gxpd) return true;
        if (o.isgq()) return true;
        if (!o.ckzt) {
            if (_yh.gly || o.ck) return true;
        } else {
            if (!_yh.gly && !o.ck) return true;
        };
        if (o.xzzt) {
            if (_kj.jzxzlx > 0) return true;
            if (!_yh.gly && !o.xz) return true;
        } else {
            if (_kj.jzxzlx == 0) {
                if (_yh.gly) return true;
                if (o.xz) return true;
            }
        };
        return false;
    },
    gx: function (rmlbh, rsx) {
        rmlbh = rmlbh * 1;
        if (rsx.length < 5) { alert("传值不正确:" + rsx); return; }
        var o = _mlxx.find(rmlbh);
        var ckjl = o.ck;
        o.sx = rsx;
        o.kqmm = _mlxx.zfpd(rsx, 0);
        o.ck = _mlxx.zfpd(rsx, 1);
        o.xz = _mlxx.zfpd(rsx, 2);
        o.sc = _mlxx.zfpd(rsx, 3);
        o.bj = _mlxx.zfpd(rsx, 4);
        if (ckjl != o.ck) { o.gxpd = true; }
    },
    szgx: function (rsz) {
        $.each(rsz.split(";"), function (i, o) {
            var sp1 = o.split(":");
            if (sp1.length < 2) return true;
            _mlxx.gx(sp1[0], sp1[1]);
        });

    },
    zfpd: function (rs, i) {
        return rs.substr(i, 1) == "0" ? false : true;
    }
};
var _ml = {
    omb: null, dqxz: -1, zdqbh: -1, dqzml: "", jlxzsj: null, jlzml: "", firstdq: true,
    find: function (rmlbh) { return document.getElementById("ml_" + rmlbh); },
    cdqxz: function (r) {
        if (r == this.dqxz) return;
        this.dqxz = r;
        this.cdqzml("");
        if (this.dqxz < 0) { _ym.qhczq(1); } else { _ym.qhczq(2); }
        _ev.cf("_ml.dqxz");
    },
    cdqzml: function (r) {
        if (r == this.dqzml) return;
        this.dqzml = r;
        _ev.cf("_ml.dqzml");
    },
    dj: function (ro) {
        var f = _ml.fx(ro);
        if (f.kqzt_()) {
            f.kqzt_(false);
            this.cdqxz(-1);
            return;
        }

        if (!_yh.gly && f.xx().kqmm) {
            parent._ck.set("ck/mmrz.html", { w: 267, h: 265 }).open(f.mlbh);
            return;
        }
        _ml.dj1(f);
    },
    dj1: function (r) {
        $("#menuList").children(".gml").each(function (i, o) {
            var f2 = _ml.fx(o);
            f2.kqzt_(false);
        });

        r.kqzt_(true);

        if (!_mlxx.dqpd(r.mlbh)) {
            _ml.cdqxz(r.mlbh);
            _zml.ztjc(_ml.jlzml);

            _ml.jlzml = "";
            _ym.dw(_ml.find(r.mlbh));
        } else {
            _wj.dq(r.mlbh);
        }
    },
    fx: function (ro) {
        if (!ro) ro = _ml.dqxz;
        if ($.isNumeric(ro)) { ro = $id("ml_" + ro); }
        if (!ro) return null;
        ro = $(ro);
        var fh = { mlbh: 0, ml: ro.get(0) };

        fh.mlbh = ro.attr("id").split("_")[1];
        fh.mc_ = function () { return $(ro).children("a").eq(0).html(); };
        fh.wjq_ = function () {
            return ro.children().last();
        };
        fh.kqzt_ = function (r) {
            if ($_(r)) return this.wjq_()[0].style.display == "block";
            this.wjq_()[0].style.display = r ? "block" : "none";
        };
        fh.xx = function () { return _mlxx.find(this.mlbh); };
        return fh;
    },
    tjzs: function (rfx) {
        if ($.isNumeric(rfx)) rfx = _ml.fx(rfx);
        var x = _mlxx.find(rfx.mlbh);
        var nzs = 0;
        if (!x.ck && x.wjsl) { nzs = x.wjsl; }
        return rfx.wjq_().find(".xlj,.xwj,.xwz").length + nzs;
    },
    gxtj: function (rfx) {
        $(rfx.wjq_()).children().last().find(".s1").html("记录数:" + _ml.tjzs(rfx));
    },
    xkadd: function (rmlbh) {
        if (!$.isNumeric(rmlbh)) rmlbh = _ml.dqxz;
        if (rmlbh <= 0) return "未指定目录";
        if (_kj.jzscxx != "") return _kj.jzscxx;
        var f = _ml.fx(rmlbh);
        if (!f.xx().isdq) { return "请先打开目标目录【" + f.mc_() + "】后再增加数据"; }
        var wjsl = _ml.tjzs(f);
        if (wjsl >= _kj.xdwjsl) {
            var _ts = "目录内数据量(" + wjsl + ")超过空间级别限制(" + _kj.xdwjsl + ")";
            if (!parent._kj.ffpd) { _ts += "\n\n提示：升级空间可获得更大的限制值"; }
            return _ts;
        }
        if (!_yh.gly && !f.xx().sc) { return "访客在此目录无上传权限"; }
        return "";
    },
    dq: function (rbh) {
        //rbh为目录编号，如果有编号的话，刷新完目录再刷新文件
        _ml.jlxzsj = null; _ml.jlzml = "";
        if (_ml.dqxz > 0) {
            var m1 = _ml.fx(); if (m1) {
                if (_mlxx.find().kqmm == false) { _ml.jlxzsj = m1.wjq_().html(); _ml.jlzml = _ml.dqzml; }
            }
        }
        _ym.oml.html("<li class='lxts'><span class='s3'>正在读取目录列表...</span></li>");
        var firstcz = "";
        if (_ml.firstdq) {
            _ml.firstdq = false; firstcz = "&firstcz=" + encodeURIComponent(_kj._cz);
        }
        firstcz = "";
        _AJ("ml.aspx?cz=ml_dq" + firstcz, function (j, r) {
            _zdy.cbh(j.zdy);
            _kj.fmax = j.wjl;
            _ym.bgsz('#zxrsts', j.zxrs);
            _kj.gxsyl(j.syl);
            _kj.cjzxzlx(j.xzlx);
            _kj.cjzscxx(j.sclx);
            _mlxx.szgx(j.qxjl);

            //r = vre(r, "&amp;", "&");    //兼容处理
            r = $jm64(r);
            _ym.oml.html(r);
            $.each(_mlxx.lb, function (i, o) { o.isdq = false; });
            if (_ml.dqxz > 0) {
                var m2 = _ml.fx();
                if (!m2) { _ml.cdqxz(-1); return; }
                if (_mlxx.find().kqmm == true) {
                    _ml.cdqxz(-1);
                } else {
                    if (_ml.jlxzsj) m2.wjq_().html(_ml.jlxzsj);
                    _mlxx.find().isdq = true;
                    _ml.dj();
                }
            }
            _gxxl.gx();
            _ml.tjmlzs();
            if (rbh) { _wj.dq(rbh); }
        }, function (r) { alert(r); });
    },
    gxmlnew: function (mlbh, zmlm, pd) {
        if (pd) {
            $(_ml.find(mlbh)).children(".ml").addClass("new");
        } else {
            $(_ml.find(mlbh)).children(".ml").removeClass("new");
        }
        _ml.cdmlnew(mlbh, pd);
    },
    cdmlnew: function (mlbh, pd) {
        $(_ml.find(mlbh)).find(".zml").each(function () { $(this).children("a").eq(0).removeClass("new"); })
        if (!pd) { return; }
        var ro_n = $(_ml.find(mlbh)).find(".xwj,.xwz,.xlj").find(".new");
        ro_n.each(function () { $(this).parents(".zml").each(function () { $(this).children("a").eq(0).addClass("new"); }) })
    },
    tjmlzs: function () {
        var r = $("#menuList").children(".gml").length;
        _ym.bgsz("#kjmlzs", r);
    }
};

var _wj = {
    gxcl: function () {
        if (_mlxx.dqpd()) _wj.dq();
    },
    dq: function (rbh) {
        var jsq = 0;
        if (rbh == -1) { rbh = _ml.dqxz; jsq = 1; }
        if (!rbh) { rbh = _ml.dqxz; }
        if (rbh <= 0) return;
        var f = _ml.fx(rbh);
        _mlxx.find(rbh).gxpd = false;
        var jlzml = _ml.dqzml;
        f.wjq_().html("<li class='lxts'><span class='s3'>正在读取数据...</span></li>");
        _AJ("wj.aspx?cz=dq&jsq=" + jsq + "&mlbh=" + rbh + "&wjpx=" + $(_ml.find(rbh)).attr("data-px"), function (r) {
            var xx = _mlxx.find(rbh);
            xx.dqsj = new Date().getTime();
            xx.gxpd = false;
            xx.isdq = true;
            var s1 = "<li class='lxts'><span class='s1'></span>";
            s1 += "<span class='lxtsa'><a style='color:#999966;' href='javascript:'>【刷新】</a></span>";
            s1 += "<span class='lxtsb'><a style='color:#999966;' href='javascript:'>【详情】</a></span>";
            s1 += "<a class='myButton' href='http://www.ys168.com/jb?wz=" + window.location.host + "' target='_blank' >举报</a>"
            s1 += "</li>";

            //r = vre(r, "&amp;", "&");    //兼容处理
            r = $jm64(r);
            f.wjq_().html(r + s1);
            _zml.ztjc(jlzml);
            _ml.gxtj(f);
            _ml.cdqxz(rbh);
            //_zdy.gx(rbh);
            _gxxl.gx();
            _ev.cf("_ml.dq", rbh);
            _ym.dw(_ml.find(rbh));
        }, function (r) {
            alert(r);
            _ml.cdqxz(-1);
        });

    },
    fx: function (rli) {


    },
    find: function (rwjbh) { var o = document.getElementById("W_" + rwjbh); if (!o) console.log("未找到文件W_" + rwjbh); return o; },
    addnew: function (rmlbh, rzmlmc, rsjnr, rsjbh) {
        if (rmlbh != _ml.dqxz) {
            _mlxx.find(rmlbh).gxpd = true;
            return;
        }
        var ml = _ml.find(rmlbh);
        if (!ml) { console.log("没有发现目录"); return false; }
        var lirq;
        if (rzmlmc == "") {
            lirq = $(ml).children().last();
            //var jzml = lirq.children(".zml");
            //if (jzml.length == 0) {
            //    lirq.prepend(rsjnr);
            //} else {
            //    jzml.last().after(rsjnr);
            //}
        } else {
            var zml = _zml.find(ml, rzmlmc);

            if (!zml) { console.log("no zml"); return false; }
            $(zml).children().last().children(".lxts1").remove();
            //$(zml).children().last().prepend(rsjnr)
            lirq = $(zml).children().last();
        }

        var jzml = lirq.children(".zml");
        if (jzml.length == 0) {
            lirq.prepend(rsjnr);
        } else {
            jzml.last().after(rsjnr);
        }

        var o = this.find(rsjbh);
        $(o).hide().fadeIn("slow");
        _zdy.gx(rmlbh);
        _ml.gxtj(_ml.fx(rmlbh));

    },
    angklj: function () {
        if (_yh.gly) { return; }
        if (_kj.qxsc) { return;}
        if ($id("pdgklj").checked) { alert("抱歉，无登录密码的空间访客不允许增加公开数据"); $id("pdgklj").checked = false;}
    },
    angkwz: function () {
        if (_yh.gly) { return; }
        if (_kj.qxsc) { return; }
        if ($id("pdgkwz").checked) { alert("抱歉，无登录密码的空间访客不允许增加公开数据"); $id("pdgkwz").checked = false; }
    },
    addlj: function (r) {
        if (_yh.gly || $id("pdgkwz").checked) { _wj.addlj2(r); return; }
        myConfirm("确认增加数据", "访客只能增加隐藏数据，此数据只有管理员可以看到，请确认是否增加", function (rr) {
            if (rr) { _wj.addlj2(r); }
        });
    },
    addlj2: function (r) {
        var ts = "网址"; var w1 = $id("scbt2"); var w2 = $id("teljdz"); var an = $id("bulj");
        if (r == 1) { ts = "文本"; w1 = $id("scbt4"); w2 = $id("tewb"); an = $id("buwz"); }
        an.disabled = true;
        var xksc = _ml.xkadd(); if (xksc != "") { alert(xksc); an.disabled = false; return; }
        if (w1.value == "") { alert("标题不能为空"); w1.focus(); an.disabled = false; return; }
        if (w2.value == "") { alert(ts + "不能为空"); w2.focus(); an.disabled = false; return; }
        if (w1.value.length > 50) { alert("标题不能超过50个字符，当前字符数：" + w1.value.length); w1.focus(); an.disabled = false; return; }
        if (w2.value.length > 200) { alert(ts + "不能超过200个字符，当前字符数：" + w2.value.length); w2.focus(); an.disabled = false; return; }
        var gk = 1;
        if (r == 0) {
            if (w2.value.indexOf("http://") != 0 && w2.value.indexOf("https://") != 0 && w2.value.indexOf("ftp://") != 0 && w2.value.indexOf("mms://") != 0 && w2.value.indexOf("rtsp://") != 0) {
                alert("链接网址开头必须要使用下面中的一个:\n\n “http://”、“https://”、“ftp://”、“mms://”、“rtsp://”"); w2.focus(); an.disabled = false; return;
            }
            if ($id("pdgklj").checked == false) { gk = 0; }
        } else {
            if (w2.value.indexOf("http://") == 0 || w2.value.indexOf("https://") == 0 || w2.value.indexOf("ftp://") == 0 || w2.value.indexOf("mms://") == 0 || w2.value.indexOf("rtsp://") == 0) {
                alert("文字内容不支持以网址形式输入。开头不支持以下字符:\n\n “http://”、“https://”、“ftp://”、“mms://”、“rtsp://”"); w2.focus(); an.disabled = false; return;
            }
            if ($id("pdgkwz").checked == false) { gk = 0; }
        }
        var ml1 = "mlbh=" + _ml.dqxz + "&gk=" + gk;
        var ml2 = "zml=" + $bm(_ml.dqzml) + "&w1=" + $bm(w1.value) + "&w2=" + $bm(w2.value);
        _AJ("wj.aspx?cz=Addlj&" + ml1, ml2, function (j, rr) {
            _wj.addnew(_ml.dqxz, _ml.dqzml, rr, j.wjbh);
            _ml.gxmlnew(_ml.dqxz, _ml.dqzml, true);
            w1.value = ""; w2.value = ""; an.disabled = false;
            if (r == 1) { $id("shuru1").innerHTML = 0; $id("shuru2").innerHTML = 0; } else { $id("shuru3").innerHTML = 0; $id("shuru4").innerHTML = 0; }
        }, function (rr) { alert(rr); an.disabled = false; });
    }
};
_ev.dy("_dqtx.tx", "_wj.gxcl")
_ev.dy("window.onfocus", "_wj.gxcl")
var _zml = {
    find: function (roml, rzmlmc) {
        var jg = null;
        var sz_lj = rzmlmc.split("/");
        jg = $(roml);
        for (var i = 0; i < sz_lj.length; i++) {
            if (!jg) { return null; }
            var pd = 0;
            jg.children().last().children(".zml").each(function () {
                var s1 = _zml.fx(this);
                if (s1.mcz.toLowerCase() == sz_lj[i].toLowerCase()) { jg = $(this); pd = 1; return false; }
            });
            if (pd == 0) { return null; }
        }
        return jg;
    },
    dj: function (ro) {
        ro = $(ro);
        var f = _zml.fx(ro);

        if (f.kq_()) {
            f.kq_(false);
            var rop = ro.parent().parent(); var s1 = "";
            if (rop.hasClass("zml")) { s1 = _zml.fx(rop).mc; }
            _ml.cdqzml(s1);
        } else { _zml.ztjc(f.mc); }
        _ym.dw(ro);
    },
    fx: function (ro) {
        ro = $(ro);
        var fh = { mc: "", mcz: "" };
        fh.kq_ = function (r) {
            var x = ro.children().last();
            if ($_(r)) return x[0].style.display == "block";
            if (r) x.show();
            if (!r) x.hide();
        };
        fh.mcz = ro.children("a").eq(0).html();
        fh.mc = _zml.fx_lj(ro, fh.mcz);
        return fh;
    },
    fx_lj: function (ro, zmlm) {
        var _ro = ro.parent().parent(); var _lj = zmlm;
        while ($(_ro).hasClass("zml")) { _lj = _ro.children("a").eq(0).html() + "/" + _lj; _ro = _ro.parent().parent(); }
        return _lj;
    },
    ztjc: function (r) {
        if (_ml.dqxz < 0) { _ml.cdqzml(""); return; }
        if (r == "") { $(_ml.find(_ml.dqxz)).children().last().find(".menu").hide(); return; }
        var ro = _zml.find(_ml.find(_ml.dqxz), r);
        var s1 = "";
        $(ro).parent().children(".zml").each(function (i, o) {
            var z2 = _zml.fx(o);
            if (_zml.fx(ro).mc == z2.mc) {
                z2.kq_(true); s1 = z2.mc;
                $(o).children().last().find(".menu").hide();
            } else { z2.kq_(false); }
        });
        $(ro).parents(".zml").each(function () { $(this).children().last().show(); });
        _ml.cdqzml(s1);
    },
    cj: function () {
        var zml = $id("tezml");
        var zmlmc = zml.value.trim();
        $id("buzml").disabled = true;
        if (zmlmc == "") { alert("请输入子目录名"); $id("buzml").disabled = false; zml.focus(); return; }
        if (zmlmc.indexOf(" ") >= 0) { alert("抱歉，子目录名不支持字符(空格)"); $id("buzml").disabled = false; zml.focus(); return; }

        var s1 = "_#+?/%&\\<>\'";
        for (i = 0; i <= s1.length - 1; i++) {
            if (zmlmc.indexOf(s1.substr(i, 1)) >= 0) { alert("抱歉，子目录名不支持字符(" + s1.substr(i, 1) + ")"); $id("buzml").disabled = false; zml.focus(); return; }
        }

        var zmllj = zmlmc;
        if (_ml.dqzml != "") { zmllj = _ml.dqzml + "/" + zmllj; }
        if (zmllj.length > 100) { alert("抱歉，子目录总字符数不能超过100。"); $id("buzml").disabled = false; zml.focus(); return; }
        if (_zml.find(_ml.find(_ml.dqxz), zmllj)) { alert("抱歉，此子目录已经存在。"); $id("buzml").disabled = false; zml.focus(); return; }

        _AJ("wj.aspx?cz=Addzml", "dqzml=" + $bm(_ml.dqzml) + "&zml=" + $bm(zmlmc) + "&mlbh=" + _ml.dqxz, function (r) {
            var li = document.createElement("li"); li.className = "zml"; li.innerHTML = r;
            var mlro = $("#ml_" + _ml.dqxz);
            if (_ml.dqzml != "") { mlro = _zml.find(_ml.find(_ml.dqxz), _ml.dqzml); }
            mlro = $(mlro);
            var sz1 = [];
            mlro.children("ul").children(".zml").each(function (i, o) { sz1.push(_zml.fx(o).mcz); }); sz1.push(zmlmc);
            sz1.sort(function compareFunction(param1, param2) { return param1.localeCompare(param2); });
            var wz = 0; for (var i = 0; i < sz1.length; i++) { if (sz1[i] == zmlmc) { wz = i; break; } }
            if (mlro.children("ul").children().length <= wz) { mlro.children("ul").append(li) } else { mlro.children("ul").children().eq(wz).before(li); }
            mlro.children().last().children(".lxts1").remove();
            _zml.dj(mlro.children("ul").children().eq(wz));
            $("#wjlx1").click();
            _ym.dw(li);
            zml.value = ""; $id("buzml").disabled = false;
        }, function (r) { alert(r); $id("buzml").disabled = false; zml.focus(); })
    },
    jckml: function () {
        var ro = _zml.find(_ml.find(_ml.dqxz), _ml.dqzml);
        ro = $(ro).children("ul").eq(0);
        var li = document.createElement("li"); li.className = "lxts1";
        li.innerHTML = "<span class='s1' style='color:red;font-weight:bold;'>请添加内容，否则此子目录不会被记录！</span>";
        if (ro.children().length == 0) { ro.append(li); } else { ro.children(".lxts1").remove(); }
    }
};
var _lyb = {
    lygxpd: false,
    cs: function () {
        $("#lyz").children().last().find("button").each(function (i, o) { $(this).unbind().on("click", function () { _lyb.dq(i + 1); }) });
        _lyb.dq(1);
    },
    qh: function (pd) {
        if (pd == "z") { bdbq.value = ++bdbq.value; }
        if (pd == "y") { bdbq.value = --bdbq.value; };
        if (bdbq.value < 0) { bdbq.value = 9; }
        if (bdbq.value > 9) { bdbq.value = 0; }
        document.images['t_bq'].src = _kj.zydz + "tp/face2/f" + bdbq.value + ".gif";
    },
    tj: function (ryzm) {
        if (!_yh.gly) {
            if (_kj.qxly == 0) {
                alert((cn == "0") ? "The manager has forbidden the message function!\n\nPrompt: The manager lands after the administrative district may the message" : "管理员已禁止留言功能！\n\n提示: 管理员在管理区登录后可以留言"); return false;
            };
            if ($id("bdgkpdlyb").checked) {
                if (!confirm((cn == "0") ? "The administrator has prohibited increase in the open message, your message will be encrypted to submit" : "管理员已禁止增加公开留言，您的留言将以不公开方式提交")) {
                    return false;
                }; $id("bdgkpdlyb").checked = false;
            }
        }

        var sxm = $id("xm").value;
        var snr = $id("nr").value;
        if (sxm == "") { alert((cn == "0") ? "The name cannot be spatial" : "留言人姓名不能为空"); return false };
        if (snr == "") { alert((cn == "0") ? "The content cannot be spatial" : "留言内容不能为空"); return false };
        if (snr.length > 1000) { alert("留言内容长度不能超过1000个字符！当前长度为:" + snr.length); return false; };
        if (sxm.length > 15) { alert("留言姓名长度不能超过15个字符！当前长度为:" + sxm.length); return false; };
        if (_yh.gly && $id("bdgkpdlyb").checked == false) { alert("由于您已经在管理区登录，不公开的留言也可以查看，\n\n如要查看效果，请在管理区退出"); }

        var pdgk = $id("bdgkpdlyb").checked ? "1" : "0";
        var pdgly = $id("lyb_gly").checked ? "1" : "0";
        var pdzd = $id("lyb_zd").checked ? "1" : "0";

        _AJ("lyd.aspx?cz=lytj&pdgk=" + pdgk + "&pdgly=" + pdgly + "&pdzd=" + pdzd + "&tou=" + $id("bdbq").value + "&yzm=" + ryzm, "sm=" + $bm(sxm) + "&nr=" + $bm(snr), function (r) {
            $id("nr").value = "";
            _lyb.dq(1);
        });

    },
    bj: function (r) {
        if (!_yh.gly) { alert("管理员在空间管理区登录后才能编辑此项数据！"); return; }
        _ck.set("ck/lybj.html", { w: 300, h: 330 }).open(r);
    },
    dq: function (r) {
        //0刷新当前页  1首页 2上页 3下页 4尾页
        _lyb.ankz(1, 0); _lyb.ankz(2, 0); _lyb.ankz(3, 0); _lyb.ankz(4, 0);
        var _dqy = 0; if (r == 2 || r == 3 || r == 0) { _dqy = $id("ly_dqys").innerHTML * 1; }
        var _dqbh = 0; if (r == 2 || r == 0) { _dqbh = _lyb.lyqbh(0); } else if (r == 3) { _dqbh = _lyb.lyqbh(1); }
        var zts; if (isNaN($id("ly_zs").innerHTML)) { zts = 0; } else { zts = $id("ly_zs").innerHTML * 1; }

        _AJ("lyd.aspx?cz=lyxs&n=" + r + "&dqy=" + _dqy + "&lybh=" + _dqbh + "&zts=" + zts,
            function (rjson, r1) {
                _yh.bgglzt(rjson.gly);
                var lab = $("#lyz").children().last().find("label").each(function (i, o) { $(this).html(rjson.z[i]); });
                _lyb.lygxpd = (rjson.z[3] == 1) ? true : false;
                //$id("lynr").innerHTML = vre(r1, "&amp;", "&");

                $id("lynr").innerHTML = $jm64(r1);
                if (r != 0) { $id("lyz").scrollTop = 0; }
                _lyb.ankz(1, 1); _lyb.ankz(2, 1); _lyb.ankz(3, 1); _lyb.ankz(4, 1);
                var ys_dq = $id("ly_dqys").innerHTML * 1; var ys_z = $id("ly_zys").innerHTML * 1;
                if (ys_dq == 1) { _lyb.ankz(2, 0); }
                if (ys_dq == ys_z) { _lyb.ankz(3, 0); _lyb.ankz(4, 0); }
                _gxxl.gx();
            }, function (r) { }
        );
    },
    lyqbh: function (r) {//0 最上面  //1 最下面
        if ($id("ly_zs").innerHTML == "0") { return "0"; }
        if (!r) { return $id("lynr").childNodes[0].id.substr(1); } else { return $id("lynr").lastChild.id.substr(1); }
    },
    ankz: function (r, pd) { $id("bu_ly" + r).disabled = pd ? false : true; },
    dyhs: function () { if (!_lyb.lygxpd) { return; } _lyb.dq(0); },
    djan: function () {
        if (_yh.gly) { return; }
        if ($id("bdgkpdlyb").checked) { alert("已禁止访客增加公开留言，您的留言将以不公开方式提交"); $id("bdgkpdlyb").checked = false; }
        if ($id("lyb_gly").checked || $id("lyb_zd").checked) { alert("置顶和管理员身份需要在管理区登录后才可以设置"); $id("lyb_gly").checked = false; $id("lyb_zd").checked = false; }
    }
};
_ev.dy("0", "_lyb.cs");
_ev.dy("glyzt", "_lyb.dyhs");

var scsx_jsq = 0;

$(document).ready(function () { qdcx.yx(); });