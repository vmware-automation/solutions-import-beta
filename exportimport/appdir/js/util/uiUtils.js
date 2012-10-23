/**
 * A module defining some common ui utils
 * @author samueldoyle
 */
define(["jquery", "underscore", "hb!template/notice.hbs", "util/appDirCommon"], function ($, _, compiledNoticeTemplate, cu) {

    function noticeModal(templateValues) {
        var content = compiledNoticeTemplate(templateValues),
            noticeModalWrapper = $("#noticeModalWrapper");

        if (!_.isElement(noticeModalWrapper[0]) || !noticeModalWrapper.is("div")) {
            $(document.documentElement).append('<div id="noticeModalWrapper"></div>');
            noticeModalWrapper = $("#noticeModalWrapper");
        }
        noticeModalWrapper.empty().html(content);
        $("#noticeModal").modal();
    }

    // Will return a promise which is resolved or rejected depending on if the window has been open or blocked
    function openWindow(url) {
        var openOperation = $.Deferred(),
            newWindow = window.open(url),
            checkWindowBlocked = function () {
                var checkCount = 0, maxChecks = 4, checkInterval = 2000;
                if (newWindow.innerHeight > 0) {
                    cu.log("newWindow innerHeight: " + newWindow.innerHeight + " resolving");
                    openOperation.resolve();
                } else {
                    if (++checkCount == maxChecks) {
                        cu.log("Max tries to detect if window blocked reached so rejecting");
                        openOperation.reject();
                    } else {
                        cu.log("Scheduling next checkCount : " + checkCount + " checkInterval: " + checkInterval);
                        setTimeout(checkWindowBlocked, checkInterval);
                    }
                }
            };

        if (_.isUndefined(newWindow)) {
            cu.log("Window open returned undefined so rejecting");
            openOperation.reject();
        } else if (newWindow.innerHeight == 0) {
            // Chrome will always return window but can check the innerheight
            newWindow.onload = checkWindowBlocked;
        } else {
            cu.log("Window open returned fine so resolving");
            openOperation.resolve();
        }

        return openOperation;
    }

    return {
        noticeModal:function (values) {
            return noticeModal(values);
        },
        openWindow:function (url) {
            return openWindow(url);
        }
    }

});