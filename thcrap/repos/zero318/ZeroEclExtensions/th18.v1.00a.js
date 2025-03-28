{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": 0x48D2A8 },
		"zecl_lins_jump_base_count": { "val": 68 },
		"zecl_lins_jump_new_count": { "val": 9 },
		"zecl_lins_case_addr": { "val": 0x48D3B8 },
		"zecl_lins_case_base_count": { "val": 95 },
		"zecl_lins_case_new_count": { "val": 9 },
		// High ECL
		"zecl_hins_jump_addr": { "val": 0x436438 },
		"zecl_hins_jump_base_count": { "val": 175 },
		"zecl_hins_jump_new_count": { "val": 1 },
		"zecl_hins_case_addr": { "val": 0x4366F4 },
		"zecl_hins_case_base_count": { "val": 702 },
		"zecl_hins_case_new_count": { "val": 1 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x437978 },
		"zecl_ivar_jump_base_count": { "val": 103 },
		"zecl_ivar_jump_new_count": { "val": 4 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x437C10 },
		"zecl_iptr_jump_base_count": { "val": 16 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": 0x437C50 },
		"zecl_iptr_case_base_count": { "val": 63 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x438640 },
		"zecl_fvar_jump_base_count": { "val": 103 },
		"zecl_fvar_jump_new_count": { "val": 4 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x438934 },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": 0x438998 },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": 0x48D22E
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": 0x48D750
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": 0x436417
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		
		"ability_manager_ptr": {
			"type": "p",
			"val": 0x4CF298
		},
		"card_data_table_addr": {
			"type": "p",
			"val": 0x4C53C0
		},
		"card_count": {
			"type": "u32",
			"val": 56 // excluding NULL/BACK
		}
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL18_debug_breakpoint> \
<codecave:ZECL18_thcrap_expr> \
<codecave:ZECL18_math_shl> \
<codecave:ZECL18_math_shr> \
<codecave:ZECL18_math_sar> \
<codecave:ZECL18_math_rol> \
<codecave:ZECL18_math_ror> \
<codecave:ZECL18_math_udiv> \
<codecave:ZECL18_math_umod> \
"
		},
		"ZECL_low_ins_case_table": {
			"code": "\
44 \
45 \
46 \
47 \
48 \
49 \
4A \
4B \
4C \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL18_count_cards> \
"
		},
		"ZECL_high_ins_case_table": {
			"code": "\
AF \
"
		},
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL18_total_cards_int_var> \
<codecave:ZECL18_active_cards_int_var> \
<codecave:ZECL18_equipment_cards_int_var> \
<codecave:ZECL18_passive_cards_int_var> \
"
		},
		"ZECL_float_var_jump_table": {
			"code": "\
<codecave:ZECL18_total_cards_float_var> \
<codecave:ZECL18_active_cards_float_var> \
<codecave:ZECL18_equipment_cards_float_var> \
<codecave:ZECL18_passive_cards_float_var> \
"
		},
		
		"ZECL18_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_thcrap_expr": {
			"access": "re",
			"code": "\
83EC 04 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8B4F 04 \
83C1 14 \
31D2 \
6A 00 \
6A 00 \
6A 00 \
50 \
E8 [eval_expr] \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_shl": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3E0 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_shr": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3E8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_sar": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3F8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_rol": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3C0 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_ror": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3C8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_udiv": {
			"access": "re",
			"code": "\
8BB7 0C100000 \
F30F2C4C3E 10 \
807C3E 0C 66 \
0F454C3E 10 \
F30F2C443E 08 \
807C3E 04 66 \
0F45443E 08 \
31D2 \
F7F1 \
89443E 08 \
C6443E 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL18_math_umod": {
			"access": "re",
			"code": "\
8BB7 0C100000 \
F30F2C4C3E 10 \
807C3E 0C 66 \
0F454C3E 10 \
F30F2C443E 08 \
807C3E 04 66 \
0F45443E 08 \
31D2 \
F7F1 \
89543E 08 \
C6443E 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		
		"ZECL18_count_cards": {
			"access": "re",
			"code": "\
895D FC \
B8 <option:card_data_table_addr> \
8B95 84FAFFFF \
<nop:2> \
8B30 \
31C9 \
<nop:12> \
0FB61C0E \
8A7C0A 14 \
84DB \
74 05 \
41 \
38FB \
74 EF \
38FB \
74 0F \
83C0 34 \
3D (<option:card_data_table_addr> + 0x34 * <option:card_count>) \
75 D1 \
31F6 \
EB 30 \
CC \
31F6 \
8B15 <option:ability_manager_ptr> \
8B52 1C \
85D2 \
74 20 \
8B40 04 \
<nop:10> \
8B0A \
8B52 04 \
31DB \
3941 04 \
0F94C3 \
01DE \
85D2 \
75 ED \
8B87 88550000 \
8B48 0C \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
83EC 04 \
8930 \
8B5D FC \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		
		"ZECL18_total_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 28 \
C9 \
C2 0400 \
"
		},
		"ZECL18_active_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 2C \
C9 \
C2 0400 \
"
		},
		"ZECL18_equipment_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 30 \
C9 \
C2 0400 \
"
		},
		"ZECL18_passive_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 34 \
C9 \
C2 0400 \
"
		},
		
		"ZECL18_total_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 28 \
C9 \
C2 0400 \
"
		},
		"ZECL18_active_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 2C \
C9 \
C2 0400 \
"
		},
		"ZECL18_equipment_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 30 \
C9 \
C2 0400 \
"
		},
		"ZECL18_passive_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 34 \
C9 \
C2 0400 \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x48B43A
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": 0x48B433
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": 0x48B429,
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x430DD7
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": 0x430DCB
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": 0x430DBE,
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x43737D,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x437373,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x437B41
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": 0x437B3A
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": 0x437B30,
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x437CAD
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x437CA3,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x438801
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": 0x4387FA
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": 0x4387F0,
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		
		"ZECL18_ecl_context_constructor_ext": {
			"enable": false,
			"addr": 0x42CD10,
			"code": "\
31C9 \
898E 20100000 \
898E 4C100000 \
898E 7C100000 \
898E AC100000 \
898E DC100000 \
898E 0C110000 \
898E 3C110000 \
898E 6C110000 \
898E 9C110000 \
898E 04120000 \
5E \
C3 \
<int3:18> \
",
			"expect": "\
C786 4C100000 00000000 \
C786 7C100000 00000000 \
C786 AC100000 00000000 \
C786 DC100000 00000000 \
C786 0C110000 00000000 \
C786 3C110000 00000000 \
C786 6C110000 00000000 \
C786 9C110000 00000000 \
5E \
C3 \
"
		},
		
		"ZECL18_enhance_disable_crit_sections": {
			"enable": "<option:zecl_experimental_enhancements>",
			"addr": 0x471301,
			"code": "<nop:7>",
			"expect": "C605 <0x5217BE> 01",
		},
		
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x4A63BF, 0x4A6700, 0x4A6724, 0x4A7177, 0x4A7179, 0x4A71AA, 0x4A71D1, 0x4A71D3, 0x4A7201, 0x4A7208, 0x4A7223, 0x4A723E, 0x4A7240, 0x4A7254, 0x4A7430, 0x4A7448, 0x4A744A, 0x4A7450, 0x4A7452, 0x4A745D, 0x4A7460, 0x4A7520, 0x4A7522, 0x4A7540, 0x4A7542, 0x4A79EC, 0x4A7D5D, 0x4A7D8F, 0x4A7DAE, 0x4A7DCF, 0x4A7DEA, 0x4A7DF7, 0x4A7E26, 0x4A7E58, 0x4A7E77, 0x4A7E81, 0x4A8265, 0x4A872A, 0x4A8DFA, 0x4A8E06, 0x4A8E1B, 0x4A8EB0, 0x4A8EBF, 0x4A8F38, 0x4A8F5B, 0x4A8F78, 0x4A9018, 0x4A9033, 0x4AA550, 0x4AA560, 0x4AA566, 0x4AA571, 0x4AA57C, 0x4AA590, 0x4AA8F9, 0x4AA91A, 0x4AA9F3, 0x4AAAE6, 0x4AABD6, 0x4AAC95, 0x4AACC8, 0x4AACDA, 0x4AADAB, 0x4AB9F5, ],
		},
		"ZECL_enhance_remove_finit": {
			"addr": [ 0x4027D4, 0x402814, 0x402854, 0x42A335, 0x43E390, 0x44252B, ],
		},
		"ZECL_enhance_remove_bt_mem_A": {
			"addr": [ 0x48F922, 0x48F9AD, 0x490E44, 0x491504, ],
		},
		"ZECL_enhance_remove_bt_mem_B": {
			"addr": [ 0x48F935, 0x490E31, 0x490E62, 0x490E70, 0x4910C3, 0x4914F1, 0x491522, 0x491530, 0x491783, ],
		},
	}
}