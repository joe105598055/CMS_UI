<template>
<div class="row">
    <br>
    <router-link to="/addclip_video"><button class="btn btn-default">新增媒體</button></router-link>
    <hr/>
    <div class="panel-group" id="accordion" style="padding-right:2% ">
      <div class="panel">
        <div class="btn-group-default">
            <button class=" btn btn-default " style="width: 95.5%;text-align:left;" type=" button " data-parent="#accordion" data-toggle="collapse" href="#collapseTT" v>
              <span type="button " class="close pull-left " style="margin-right:3%">&times&nbsp</span>
              Hello
              <span class="badge" style="float:right">15:30</span>
            </button>
            <div class="dropdown" style="float:right;">
              <span data-toggle="dropdown" class="btn btn-default pull-right glyphicon glyphicon-menu-hamburger" type="button"></span>
              <ul class="dropdown-menu pull-right">
                  <li><a href="#" class = "glyphicon glyphicon-expand">&nbsp新增到播放列表</a></li>
                  <li><a href="#" class = "glyphicon glyphicon-pencil">&nbsp編輯</a></li>
              </ul>
            </div>
        </div>
        <div id="collapseTT" class="collapse" style="width:95.5%;">
            <ul class="list-group ">
                <li class="list-group-item " style="padding-left:6% "><a>English</a></li>
                <li class="list-group-item " style="padding-left:6% "><a>Spanish</a></li>
                <li class="list-group-item " style="padding-left:6% "><a>Taiwanese</a></li>
            </ul>
        </div>
    </div>
        <div class="panel panel-default">
            <h4 class="panel-title">
                    <button type="button" class="list-group-item" data-parent="#accordion" data-toggle="collapse" href="#collapseCwo">
                          <label style="padding-top:0.3%">Test</label>
                          <span type = "button"  class="close pull-left" style="margin-right:2%">&times&nbsp</span>
                          <span type = "button"  class="close pull-right" style="margin-left:2%"  data-toggle="dropdown">···</span>
                          <ul class="dropdown-menu pull-right" role="menu" >
                            <li><a>Add to PlayList</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                          <span class="badge">5:30</span>
                    </button>

              </h4>
            <div id="collapseCwo" class="panel-collapse collapse">
                <ul class="list-group">
                    <li class="list-group-item" style="padding-left:6%"><a>English</a></li>
                    <li class="list-group-item" style="padding-left:6%"><a>Spanish</a></li>
                    <li class="list-group-item" style="padding-left:6%"><a>Taiwanese</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
.panel-body {
    padding: 0px;
}

.panel-body table tr td {
    padding-left: 15px
}

.panel-body .table {
    margin-bottom: 0px;
}

.panel-group .panel {
    border-radius: 10px;
}
</style>
>

<style>
.panel-body {
    padding: 0px;
}

.panel-body table tr td {
    padding-left: 15px
}

.show-on-hover:hover>ul.dropdown-menu {
    display: block;
}

.panel-body .table {
    margin-bottom: 0px;
}

.panel-group .panel {
    border-radius: 10px;
}
</style>
