<template>
<div class="row">
    <br>
    <router-link to="/addclip_video"><button class="btn btn-default">新增媒體</button></router-link>
    <hr/>
    <div class="panel-group" id="accordion" style="padding-right:2% ">
      <div class="panel" style="border:solid 1px lightgray;border-radius:5px">
        <div class="btn-group-default" style="border:none">
            <span class=" btn btn-default " style="width: 95.87%;text-align:left; border:none" type=" button " data-parent="#accordion" data-toggle="collapse" href="#collapseTT" v>
              <span type="button " class="close pull-left " style="margin-right:3%">&times&nbsp</span>
              Nemo
              <span class="badge" style="float:right">15:30</span>
            </span>
            <div class="dropdown" style="float:right;">
              <span data-toggle="dropdown" class="btn btn-default pull-right glyphicon glyphicon-menu-hamburger" style="border:none;border-right:10px" type="button"></span>
              <ul class="dropdown-menu pull-right">
                  <li><a href="#" class = "glyphicon glyphicon-expand">&nbsp新增到播放列表</a></li>
                  <li><a href="#" class = "glyphicon glyphicon-pencil">&nbsp編輯</a></li>
              </ul>
            </div>
        </div>
        <div id="collapseTT" class="collapse">
            <ul class="list-group" style="margin-bottom:0px">
                <li class="list-group-item " style="padding-left:6% "><a>English</a></li>
                <li class="list-group-item " style="padding-left:6% "><a>Spanish</a></li>
                <li class="list-group-item " style="padding-left:6% "><a>Taiwanese</a></li>
            </ul>
        </div>
    </div>

    <div class="panel" style="border:solid 1px lightgray;border-radius:5px">
      <div class="btn-group-default" style="border:none">
          <span class=" btn btn-default " style="width: 95.87%;text-align:left; border:none" type=" button " data-parent="#accordion" data-toggle="collapse" href="#collapse2" v>
            <span type="button " class="close pull-left " style="margin-right:3%">&times&nbsp</span>
            Let it go
            <span class="badge" style="float:right">5:30</span>
          </span>
          <div class="dropdown" style="float:right;">
            <span data-toggle="dropdown" class="btn btn-default pull-right glyphicon glyphicon-menu-hamburger" style="border:none;border-right:10px" type="button"></span>
            <ul class="dropdown-menu pull-right">
                <li><a href="#" class = "glyphicon glyphicon-expand">&nbsp新增到播放列表</a></li>
                <li><a href="#" class = "glyphicon glyphicon-pencil">&nbsp編輯</a></li>
            </ul>
          </div>
      </div>
      <div id="collapse2" class="collapse">
          <ul class="list-group" style="margin-bottom:0px">
              <li class="list-group-item " style="padding-left:6% "><a>English</a></li>
              <li class="list-group-item " style="padding-left:6% "><a>Spanish</a></li>
              <li class="list-group-item " style="padding-left:6% "><a>Taiwanese</a></li>
          </ul>
      </div>
  </div>

  <div class="panel" style="border:solid 1px lightgray;border-radius:5px">
    <div class="btn-group-default" style="border:none">
        <span class=" btn btn-default " style="width: 95.87%;text-align:left; border:none" type=" button " data-parent="#accordion" data-toggle="collapse" href="#collapse3" v>
          <span type="button " class="close pull-left " style="margin-right:3%">&times&nbsp</span>
          Zoo
          <span class="badge" style="float:right">12:30</span>
        </span>
        <div class="dropdown" style="float:right;">
          <span data-toggle="dropdown" class="btn btn-default pull-right glyphicon glyphicon-menu-hamburger" style="border:none;border-right:10px" type="button"></span>
          <ul class="dropdown-menu pull-right">
              <li><a href="#" class = "glyphicon glyphicon-expand">&nbsp新增到播放列表</a></li>
              <li><a href="#" class = "glyphicon glyphicon-pencil">&nbsp編輯</a></li>
          </ul>
        </div>
    </div>
    <div id="collapse3" class="collapse">
        <ul class="list-group" style="margin-bottom:0px">
            <li class="list-group-item " style="padding-left:6% "><a>English</a></li>
            <li class="list-group-item " style="padding-left:6% "><a>Spanish</a></li>
            <li class="list-group-item " style="padding-left:6% "><a>Taiwanese</a></li>
        </ul>
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
