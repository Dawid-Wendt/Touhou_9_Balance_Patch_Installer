{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": 0x483D00 },
		"zecl_lins_jump_base_count": { "val": 67 },
		"zecl_lins_jump_new_count": { "val": 9 },
		"zecl_lins_case_addr": { "val": 0x483E0C },
		"zecl_lins_case_base_count": { "val": 94 },
		"zecl_lins_case_new_count": { "val": 9 },
		// High ECL
		"zecl_hins_jump_addr": { "val": 0x429C50 },
		"zecl_hins_jump_base_count": { "val": 169 },
		"zecl_hins_jump_new_count": { "val": 1 },
		"zecl_hins_case_addr": { "val": 0x429EF4 },
		"zecl_hins_case_base_count": { "val": 704 },
		"zecl_hins_case_new_count": { "val": 1 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x42AF34 },
		"zecl_ivar_jump_base_count": { "val": 95 },
		"zecl_ivar_jump_new_count": { "val": 1 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x42B1A8 },
		"zecl_iptr_jump_base_count": { "val": 16 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": 0x42B1E8 },
		"zecl_iptr_case_base_count": { "val": 63 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x42BB38 },
		"zecl_fvar_jump_base_count": { "val": 95 },
		"zecl_fvar_jump_new_count": { "val": 1 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x42BE14 },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": 0x42BE78 },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": 0x483C0C
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_ivar_arg_addr": {
			"type": "p",
			"val": 0x483F30
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": 0x4843E0
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": 0x429C28
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL14_debug_breakpoint> \
<codecave:ZECL14_thcrap_expr> \
<codecave:ZECL14_math_shl> \
<codecave:ZECL14_math_shr> \
<codecave:ZECL14_math_sar> \
<codecave:ZECL14_math_rol> \
<codecave:ZECL14_math_ror> \
<codecave:ZECL14_math_udiv> \
<codecave:ZECL14_math_umod> \
"
		},
		"ZECL_low_ins_case_table": {
			"code": "\
43 \
44 \
45 \
46 \
47 \
48 \
49 \
4A \
4B \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL14_enemy_life_set_current> \
"
		},
		"ZECL_high_ins_case_table": {
			"code": "\
A9 \
"
		},
		"ZECL_int_var_jump_table":  {
			"code": "\
<codecave:ZECL14_self_life_max_ivar> \
"
		},
		"ZECL_float_var_jump_table":  {
			"code": "\
<codecave:ZECL14_self_life_max_fvar> \
"
		},
		
		"ZECL14_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_thcrap_expr": {
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
		"ZECL14_math_shl": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3E0 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_math_shr": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3E8 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_math_sar": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3F8 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_math_rol": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3C0 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_math_ror": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3C8 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_math_udiv": {
			"access": "re",
			"code": "\
8BB7 08100000 \
F30F2C4C3E 0C \
807C3E 08 66 \
0F454C3E 0C \
F30F2C443E 04 \
803C3E 66 \
0F45443E 04 \
31D2 \
F7F1 \
89443E 04 \
C6043E 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL14_math_umod": {
			"access": "re",
			"code": "\
8BB7 08100000 \
F30F2C4C3E 0C \
807C3E 08 66 \
0F454C3E 0C \
F30F2C443E 04 \
803C3E 66 \
0F45443E 04 \
31D2 \
F7F1 \
89543E 04 \
C6043E 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		
		"ZECL14_enemy_life_set_current": {
			"access": "re",
			"code": "\
8B87 EC400000 \
8B48 04 \
6A 00 \
E8 [<option:ecl_lins_get_ivar_arg_addr>] \
8D0CC5 00000000 \
8987 743F0000 \
29C1 \
898F 803F0000 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		
		"ZECL14_self_life_max_ivar": {
			"access": "re",
			"code": "\
8B81 68510000 \
C9 \
C2 0400 \
"
		},
		
		"ZECL14_self_life_max_fvar": {
			"access": "re",
			"code": "\
DB81 68510000 \
C9 \
C2 0400 \
"
		},
		
		"ZECL14_sagume_func": {
			"access": "re",
			"code": "\
89D0 \
8B91 98020000 \
85D2 \
7E 0C \
01D0 \
C781 98020000 00000000 \
C3 \
"
		},
		"ZECL_ext_damage_func_table": {
			"access": "r",
			"code": "\
00000000 \
<0x42C9C0> \
<codecave:ZECL14_sagume_func> \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x4823E9
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": 0x4823E2
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": 0x4823D8,
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x4252EA
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": 0x4252E3
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": 0x4252D6,
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x42A93D,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x42A933,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x42B0CE
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": 0x42B0C7
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": 0x42B0BD,
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x42B24D
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x42B243,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x42BCDE
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": 0x42BCD7
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": 0x42BCCD,
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		
		"ZECL14_ecl_context_constructor_ext": {
			"enable": false,
			"addr": 0x420EEC,
			"code": "\
31C0 \
8981 1C100000 \
8981 48100000 \
8981 78100000 \
8981 A8100000 \
8981 D8100000 \
8981 08110000 \
8981 38110000 \
8981 68110000 \
8981 98110000 \
8981 C0110000 \
89C8 \
C3 \
<int3:18> \
",
			"expect": "\
C781 48100000 00000000 \
C781 78100000 00000000 \
C781 A8100000 00000000 \
C781 D8100000 00000000 \
C781 08110000 00000000 \
C781 38110000 00000000 \
C781 68110000 00000000 \
C781 98110000 00000000 \
8BC1 \
C3 \
"
		},
		
		"ZECL14_ext_damage_func_table_replace": {
			"addr": 0x42763B,
			"code": "<codecave:ZECL_ext_damage_func_table>",
			"expect": "<0x4D56F0>"
		}
	}
}