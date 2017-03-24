<template>
  <div class = "container-fluid">
  <div class="row">
    <div class="col-sm-2 col-md-2 col-lg-2">
      <br>
      <nav class = "navbar navbar-fix-top">
        <ul class = "nav nav-tabs-vertical" style = "font-size:20px;font-family:王漢宗粗鋼體一標準,Microsoft JhengHei;">
          <li>
            <router-link to = "/videoclip">媒體管理</router-link>
          </li>
          <li>
            <router-link to = "/playlist">播放清單製作</router-link>
          </li>
          <li>
            <router-link to = "/schedule">排程</router-link>
          </li>
          <li>
            <router-link to = "/displayer">撥放器管理</router-link>
          </li>
          <li>
            <router-link to = "/makeqrcode">展場管理</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-sm-10 col-md-10 col-lg-10 col">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
  </div>
</template>

<style>

html,body,.container-fluid {
  height: 100%;
}

.row {
  height: 100%;
}

.col:not(:first-child),.col:not(:last-child) {
  padding-left:30px;
}

.col-md-2 {
    padding-bottom: 40%;
    margin-bottom: -40%;
    border-right: 1px solid #ccc;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .2s;
}

.fade-enter-active {
  transition-delay: .2s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
