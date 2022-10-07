function select_all() {
    $('input[class=selected_data]:checkbox').each(function() {
        if ($('input[class=select-all]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}


$(document).on("click", ".deleteBtn", function() {
    $("#multi_delete").modal("show");
    var number_checkbox = $(".selected_data").filter(":checked").length;
    $("#count").html(number_checkbox);
    if (number_checkbox > 0) {
        $(".delete_done").show();
        $(".check_delete").hide();
    } else {
        $(".delete_done").hide();
        $(".check_delete").show();
    }
});

function select_all_inter() {
    $('input[class=selected_data_inter]:checkbox').each(function() {
        if ($('input[class=select-all-inter]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_exter() {
    $('input[class=selected_data_exter]:checkbox').each(function() {
        if ($('input[class=select-all-exter]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_equipment() {
    $('input[class=selected_data_equipment]:checkbox').each(function() {
        if ($('input[class=select-all-equipment]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_gas() {
    $('input[class=selected_data_gas]:checkbox').each(function() {
        if ($('input[class=select-all-gas]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_item() {
    $('input[class=selected_data_item]:checkbox').each(function() {
        if ($('input[class=select-all-item]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}


function select_all_inter_edit() {
    $('input[class=selected_data_inter_edit]:checkbox').each(function() {
        if ($('input[class=select-all-inter-edit]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_exter_edit() {
    $('input[class=selected_data_exter_edit]:checkbox').each(function() {
        if ($('input[class=select-all-exter-edit]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_equipment_edit() {
    $('input[class=selected_data_equipment_edit]:checkbox').each(function() {
        if ($('input[class=select-all-equipment-edit]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_gas_edit() {
    $('input[class=selected_data_gas_edit]:checkbox').each(function() {
        if ($('input[class=select-all-gas-edit]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_item_edit() {
    $('input[class=selected_data_item_edit]:checkbox').each(function() {
        if ($('input[class=select-all-item-edit]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_servicePackage() {
    $('input[class=selected_data_servicePackage]:checkbox').each(function() {
        if ($('input[class=select-all-servicePackage]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}

function select_all_servicePackage_edit() {
    $('input[class=selected_data_servicePackage_edit]:checkbox').each(function() {
        if ($('input[class=select-all-servicePackage-edit]:checkbox:checked').length == 0) {
            $(this).prop("checked", false);
        } else {
            $(this).prop("checked", true);
        }
    });
}