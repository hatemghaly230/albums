/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
$(function () {
    "use strict";
    // Make the dashboard widgets sortable Using jquery UI

    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".card-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999,
        start: function (event, ui) {
            ui.item.startPos = ui.item.index();
        },
        stop: function (event, ui) {
            console.log("Start position: " + ui.item.startPos);
            console.log("New position: " + ui.item.index());
            console.log("Item name: " + ui.item.attr("item_name"));
            //console.debug("New position: " + ui.item);
        },
    });

    $(
        ".connectedSortable .card-header, .connectedSortable .nav-tabs-custom"
    ).css("cursor", "move");

    // jQuery UI sortable for the todo list
    // $(".todo-list").sortable({
    //     placeholder: "sort-highlight",
    //     handle: ".handle",
    //     forcePlaceholderSize: true,
    //     zIndex: 999999,
    //     start: function (event, ui) {
    //         ui.item.startPos = ui.item.index();
    //     },
    //     stop: function (event, ui) {
    //         // console.log("Start position: " + ui.item.startPos);
    //         // console.log("New position: " + ui.item.index());
    //     },
    // });

    // bootstrap WYSIHTML5 - text editor
    $(".textarea").summernote();

    $(".daterange").daterangepicker({
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [
                moment().subtract(1, "days"),
                moment().subtract(1, "days"),
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [
                moment().startOf("month"),
                moment().endOf("month"),
            ],
            "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
            ],
        },
        startDate: moment().subtract(29, "days"),
        endDate: moment(),
    },
        function (start, end) {
            window.alert(
                "You chose: " +
                start.format("MMMM D, YYYY") +
                " - " +
                end.format("MMMM D, YYYY")
            );
        }
    );

    /* jQueryKnob */
    $(".knob").knob();

    // jvectormap data

    // var visitorsData = {
    //     US: 398, //USA
    //     SA: 400, //Saudi Arabia
    //     CA: 1000, //Canada
    //     DE: 500, //Germany
    //     FR: 760, //France
    //     CN: 300, //China
    //     AU: 700, //Australia
    //     BR: 600, //Brazil
    //     IN: 800, //India
    //     GB: 320, //Great Britain
    //     RU: 3000, //Russia
    // };

    // World map by jvectormap
    // $("#world-map").vectorMap({
    //     map: "world_en",
    //     backgroundColor: "transparent",
    //     regionStyle: {
    //         initial: {
    //             fill: "rgba(255, 255, 255, 0.7)",
    //             "fill-opacity": 1,
    //             stroke: "rgba(0,0,0,.2)",
    //             "stroke-width": 1,
    //             "stroke-opacity": 1,
    //         },
    //     },
    //     series: {
    //         regions: [{
    //             values: visitorsData,
    //             scale: ["#ffffff", "#0154ad"],
    //             normalizeFunction: "polynomial",
    //         },],
    //     },
    //     onRegionLabelShow: function (e, el, code) {
    //         if (typeof visitorsData[code] != "undefined")
    //             el.html(
    //                 el.html() + ": " + visitorsData[code] + " new visitors"
    //             );
    //     },
    // });

    // Sparkline charts

    // var sparkline1 = new Sparkline($("#sparkline-1")[0], {
    //     width: 80,
    //     height: 50,
    //     lineColor: "#92c1dc",
    //     endColor: "#ebf4f9",
    // });

    // var sparkline2 = new Sparkline($("#sparkline-2")[0], {
    //     width: 80,
    //     height: 50,
    //     lineColor: "#92c1dc",
    //     endColor: "#ebf4f9",
    // });

    // var sparkline3 = new Sparkline($("#sparkline-3")[0], {
    //     width: 80,
    //     height: 50,
    //     lineColor: "#92c1dc",
    //     endColor: "#ebf4f9",
    // });

    // sparkline1.draw([1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]);
    // sparkline2.draw([515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]);
    // sparkline3.draw([15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]);

    // The Calender
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('date')) {
        $("#calendar").datetimepicker({
            format: "L",
            inline: true,
            defaultDate: urlParams.get('date')
        });
    } else {
        $("#calendar").datetimepicker({
            format: "L",
            inline: true,
        });
    }
    $("#calendar").on("change.datetimepicker", ({ date, oldDate }) => {
        var d = new Date(date);
        var format_date = d.getFullYear() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getDate();
        window.location.href = window.location.pathname + '?date=' + format_date;
    });
    $('#calendar').on('dp.change', function (e) {
        // console.log(e.date);
    })

    // The Calender

    // SLIMSCROLL FOR CHAT WIDGET

    $("#chat-box").overlayScrollbars({
        height: "250px",
    });
    $(function () {
        $.ajaxSetup({
            headers: {
                "X-CSRF-Token": $('meta[name="_token"]').attr("content"),
            },
        });
    });

    /* Chart.js Charts */
    // Sales chart
    var salesChartCanvas = document
        .getElementById("revenue-chart-canvas")
        .getContext("2d");

    $.ajax({
        type: 'get',
        async: false,
        url: "admin/addTotalIncomeBySpecialties",
        data: "",
        success: function (result) {
            // console.log(result);
        }
    });

    //add Total Income in dashboard page chart.. Hatem Ghaly
    var weekIncome = [];
    $.ajax({
        type: 'get',
        async: false,
        url: "admin/addTotalIncome",
        data: "",
        success: function (result) {
            weekIncome = result;
        }
    });

    // var weekToatl = '';
    // Object.keys(weekIncome).forEach(key => {
    //     weekToatl += " ['" + key + "' , " + weekIncome[key] + "], ";
    // });
    // console.log(weekToatl);

    // console.log(Object.values(weekIncome));
    //$('#revenue-chart').get(0).getContext('2d');
    var salesChartData = {
        labels: Object.keys(weekIncome),
        datasets: [{
            label: "Total Income",
            backgroundColor: "rgba(60,141,188,0.9)",
            borderColor: "rgba(60,141,188,0.8)",
            pointRadius: true,
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: Object.values(weekIncome)
        },
        ],
    };
    var salesChartOptions = {
        maintainAspectRatio: false,
        showTooltips: true,
        responsive: true,
        legend: {
            display: true,
        },
        scales: {
            // xAxes: [{
            //     gridLines: {
            //         display: true,
            //     },
            // },],
            // yAxes: [{
            //     gridLines: {
            //         display: true,
            //     },
            // },],
        },
    };

    // This will get the first returned node in the jQuery collection.
    var salesChart = new Chart(salesChartCanvas, {
        type: "bar",
        plugins: [ChartDataLabels],
        data: salesChartData,
        options: salesChartOptions,
    });

    // Donut Chart
    var specIncome = [];
    $.ajax({
        type: 'get',
        async: false,
        url: "admin/addTotalIncomeBySpecialties",
        data: "",
        success: function (result) {
            specIncome = result;
        }
    });
    var pieChartCanvas = $("#sales-chart-canvas").get(0).getContext("2d");
    var pieData = {
        labels: Object.keys(specIncome),
        datasets: [{
            data: Object.values(specIncome),
            backgroundColor: ["#f56954", "#00a65a", "#f39c12"],
        },],
    };
    var pieOptions = {
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    //Create pie or douhnut chart

    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
        type: "doughnut",
        data: pieData,
        options: pieOptions,
    });

    // Sales graph chart
    // var salesGraphChartCanvas = $("#line-chart").get(0).getContext("2d");
    //$('#revenue-chart').get(0).getContext('2d');

    // var salesGraphChartData = {
    //     labels: [
    //         "2011 Q1",
    //         "2011 Q2",
    //         "2011 Q3",
    //         "2011 Q4",
    //         "2012 Q1",
    //         "2012 Q2",
    //         "2012 Q3",
    //         "2012 Q4",
    //         "2013 Q1",
    //         "2013 Q2",
    //     ],
    //     datasets: [{
    //         label: "Digital Goods",
    //         fill: false,
    //         borderWidth: 2,
    //         lineTension: 0,
    //         spanGaps: true,
    //         borderColor: "#efefef",
    //         pointRadius: 3,
    //         pointHoverRadius: 7,
    //         pointColor: "#efefef",
    //         pointBackgroundColor: "#efefef",
    //         data: [
    //             2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687,
    //             8432,
    //         ],
    //     }, ],
    // };

    // var salesGraphChartOptions = {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     legend: {
    //         display: false,
    //     },
    //     scales: {
    //         xAxes: [{
    //             ticks: {
    //                 fontColor: "#efefef",
    //             },
    //             gridLines: {
    //                 display: false,
    //                 color: "#efefef",
    //                 drawBorder: false,
    //             },
    //         },],
    //         yAxes: [{
    //             ticks: {
    //                 stepSize: 5000,
    //                 fontColor: "#efefef",
    //             },
    //             gridLines: {
    //                 display: true,
    //                 color: "#efefef",
    //                 drawBorder: false,
    //             },
    //         },],
    //     },
    // };

    // This will get the first returned node in the jQuery collection.

    // var salesGraphChart = new Chart(salesGraphChartCanvas, {
    //     type: "line",
    //     data: salesGraphChartData,
    //     options: salesGraphChartOptions,
    // });

    $("#add_new_task").on("click", function (e) {
        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);
        console.log(date);
        if (urlParams.has('date')) {
            date = urlParams.get('date');
        }

        var task = $('#task').val();
        var task_date = date;
        var csrf = $("#csrf").val();
        $.ajax({
            url: 'admin/add_new_task',
            type: "POST",
            data: {
                _token: csrf,
                task: task,
                task_date: task_date
            },
            beforeSend: function () {
                $(".preloader").show();
                $(".loader").show();
            },
            success: function (data) {

                console.log(data.notes);
                var notes = '';
                if (data.notes) {
                    $.each(data.notes, function (i, item) {
                        notes += item.admin_name + '-' + item.date;
                        notes += '<div class="badge badge-primary" style="padding: 5px; width: 100%; text-align: left">' + item.task + '</div>';
                        notes += '<br>';
                    });
                }
                $('#notes').html(notes);
            },
            error: function (xhr, status, error) { },
            complete: function () {
                $(".preloader").hide();
                $(".loader").hide();
            },
        });
    });

});