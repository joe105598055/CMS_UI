<template>
<div class="row">
    <br>
    <router-link to="/addclip_video"><button class="btn btn-default">新增媒體</button></router-link>
    <hr/>
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <h4 class="panel-title">
                  <button type="button" class="list-group-item" data-parent="#accordion" data-toggle="collapse" href="#collapseOne">
                        Let it go
                        <button type = "button"  class="close pull-left" style="margin-right:5px">&times&nbsp</button>
                        <button type = "button"  class="close pull-right" style="margin-left:2%" data-toggle="dropdown">···</button>
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
            <div id="collapseOne" class="collapse">
                <div class="panel-body">
                    <table class="table">
                        <tr>
                            <td>
                                <li class=""><a href="#">Concrete Production</a></li>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <li class="active"><a href="#">Other Products</a></li>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <h4 class="panel-title">
                    <button type="button" class="list-group-item" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo">
                          <label style="padding-top:0.3%">Nemo</label>
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
            <div id="collapseTwo" class="panel-collapse collapse">
                <ul class="list-group">
                    <li class="list-group-item" style="padding-left:6%"><a>English</a></li>
                    <li class="list-group-item" style="padding-left:6%"><a>Spanish</a></li>
                    <li class="list-group-item" style="padding-left:6%"><a>Taiwanese</a></li>
                </ul>
            </div>
        </div>

        <div class="btn-group-info list-group-item">
            <button class=" btn btn-info " style=" width: 90%;" type=" button " data-toggle="collapse" href="#collapseTT"><a style="text-align:left"> Nemo</a> <span class="badge">5:30</span></button>
            <span type="button " class="close pull-left " style="margin-right:5px ">&times&nbsp</span>
            <button data-toggle="dropdown" class="btn btn-default dropdown-toggle pull-right" type="button">···</button>
            <ul class="dropdown-menu pull-right">
                <li><a href="# ">Action</a></li>
                <li><a href="# ">Another action</a></li>
                <li><a href="# ">Something else here</a></li>
                <li><a href="# ">Separated link</a></li>
            </ul>
        </div>
        <div id="collapseTT" class="panel-collapse collapse ">
            <ul class="list-group ">
                <li class="list-group-item " style="padding-left:6% "><a>English</a></li>
                <li class="list-group-item " style="padding-left:6% "><a>Spanish</a></li>
                <li class="list-group-item " style="padding-left:6% "><a>Taiwanese</a></li>
            </ul>
        </div>
    </div>
    <!-- <div class="tracklist-wrapper">
            <table class="current playing tracklist-playlist">
                <tbody>
                    <tr class="tl-row">
                        <td class="tl-cell tl-play">
                            <button type="button" data-button="play" data-ta-id="track-play-button" class="btn btn-small btn-icon btn-play"></button>
                        </td>
                        <td class="tl-cell tl-save">
                            <button type="button" class="btn btn-icon btn-link btn-add"></button>
                        </td>
                        <td class="tl-cell tl-name" colspan="2">
                            <div class="tl-highlight">Best Of 2014 Pop Mashup</div>
                        </td>
                        <td class="tl-cell tl-more">
                            <button type="button" class="btn btn-icon btn-link spoticon-more-24"></button>
                        </td>
                        <td class="tl-cell tl-time" data-bind="text: duration">05:30</td>
                    </tr>
                </tbody>
            </table>
        </div> -->


</div>

<!-- <li class="list-group-item selected navlist" id="navlist">
            <a href="#" id="active">Let it go</a>
            <button type = "button"  class="close pull-left">&times&nbsp</button>
            <button type = "button"  class="close pull-right">&nbsp&nbsp‧‧‧</button>
            <span class="badge" >5:30</span>
          </li> -->
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
yle>
