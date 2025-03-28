{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": "Rx16AFBC" },
		"zecl_lins_jump_base_count": { "val": 71 },
		"zecl_lins_jump_new_count": { "val": 9 },
		"zecl_lins_case_addr": { "val": "Rx16B0D8" },
		"zecl_lins_case_base_count": { "val": 98 },
		"zecl_lins_case_new_count": { "val": 9 },
		// High ECL
		"zecl_hins_jump_addr": { "val": "Rx10524C" },
		"zecl_hins_jump_base_count": { "val": 197 },
		"zecl_hins_jump_new_count": { "val": 11 },
		"zecl_hins_case_addr": { "val": "Rx105560" },
		"zecl_hins_case_base_count": { "val": 743 },
		"zecl_hins_case_new_count": { "val": 11 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": "RxFE170" },
		"zecl_ivar_jump_base_count": { "val": 119 },
		"zecl_ivar_jump_new_count": { "val": 19 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": "RxFD66C" },
		"zecl_iptr_jump_base_count": { "val": 20 },
		"zecl_iptr_jump_new_count": { "val": 2 },
		"zecl_iptr_case_addr": { "val": "RxFD6BC" },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 14 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": "RxFD2F0" },
		"zecl_fvar_jump_base_count": { "val": 119 },
		"zecl_fvar_jump_new_count": { "val": 17 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": "RxFC46C" },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": "RxFC4D0" },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": "Rx16AF39"
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_int_arg_addr": {
			"type": "p",
			"val": "Rx16B650"
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": "Rx16B700"
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": "Rx105234"
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		
		"game_sides_addr": {
			"type": "p",
			"val": "Rx1D1A60"
		},
		"card_data_table_addr": {
			"type": "p",
			"val": "Rx1C5640"
		},
		"card_count": {
			"type": "u32",
			"val": 39 // excluding NULL/BACK
		}
	},
	"codecaves": {
		"ZECL_high_ins_case_table": {
			"code": "\
C5 \
C6 \
C7 \
C8 \
C9 \
CA \
CB \
CC \
CD \
CE \
CF \
"
		},
		"ZECL19_thcrap_expr": {
			"access": "re",
			"code": "\
83EC 04 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8B4C24 0C \
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
		"ZECL19_count_cards": {
			"access": "re",
			"code": "\
895C24 08 \
B8 <option:card_data_table_addr> \
<nop:7> \
8B10 \
31C9 \
<nop:12> \
0FB61C0A \
8A7C0E 14 \
84DB \
74 05 \
41 \
38FB \
74 EF \
38FB \
74 0F \
83C0 20 \
3D (<option:card_data_table_addr> + 0x20 * <option:card_count>) \
75 D1 \
31F6 \
EB 30 \
CC \
31F6 \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x20) \
8B51 20 \
85D2 \
74 19 \
8B40 04 \
<nop:3> \
8B0A \
8B52 04 \
31DB \
3941 04 \
0F94C3 \
01DE \
85D2 \
75 ED \
8B87 C8550000 \
8B48 0C \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
83EC 04 \
8930 \
8B5C24 08 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_count_cards": {
			"access": "re",
			"code": "\
895C24 08 \
B8 <option:card_data_table_addr> \
<nop:7> \
8B10 \
31C9 \
<nop:12> \
0FB61C0A \
8A7C0E 14 \
84DB \
74 05 \
41 \
38FB \
74 EF \
38FB \
74 0F \
83C0 20 \
3D (<option:card_data_table_addr> + 0x20 * <option:card_count>) \
75 D1 \
31F6 \
EB 30 \
CC \
31F6 \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> +0x5C) \
8B51 20 \
85D2 \
74 19 \
8B40 04 \
<nop:3> \
8B0A \
8B52 04 \
31DB \
3941 04 \
0F94C3 \
01DE \
85D2 \
75 ED \
8B87 C8550000 \
8B48 0C \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
83EC 04 \
8930 \
8B5C24 08 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_shot_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxB870] \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_shot_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxB870] \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_power_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxEFC0] \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_power_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxEFC0] \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_deaths_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
8B41 48 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_deaths_iptr": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B82 (<option:game_sides_addr> + 0x44) \
83C0 48 \
5E \
5D \
C2 0400 \
"
		},
		"ZECL19_opposite_player_deaths_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
DB41 48 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_used_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
8B41 4C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_used_iptr": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B82 (<option:game_sides_addr> + 0x44) \
83C0 4C \
5E \
5D \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_used_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
DB41 4C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_lives_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [Rx12C90] \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_lives_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [Rx12C90] \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_lives_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [Rx12C90] \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_lives_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [Rx12C90] \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bombs_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [RxB5D0] \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bombs_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [RxB5D0] \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxB5D0] \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxB5D0] \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
8B41 10 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
DB41 10 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
8B41 10 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
DB41 10 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_barrier_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
8B41 18 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_barrier_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
DB41 18 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_barrier_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
8B41 18 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_barrier_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
DB41 18 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_flags_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
8B92 (<option:game_sides_addr> + 0x1C) \
31C0 \
83B9 70200000 00 \
0F95C0 \
31C9 \
837A 18 00 \
0F95C1 \
8D0448 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_flags_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
8B92 (<option:game_sides_addr> + 0x58) \
31C0 \
83B9 70200000 00 \
0F95C0 \
31C9 \
837A 18 00 \
0F95C1 \
8D0448 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_life_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
8B41 5C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_life_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
DB41 5C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_life_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
8B41 5C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_life_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
DB41 5C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bomb_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
8B41 6C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bomb_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
DB41 6C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bomb_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
8B41 6C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bomb_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
DB41 6C \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_game_side_ivar": {
			"access": "re",
			"code": "\
8B86 DC680000 \
83F0 01 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_game_side_fvar": {
			"access": "re",
			"code": "\
8B86 DC680000 \
83F0 01 \
8945 08 \
DB45 08 \
5F \
5E \
C9 \
C2 0400 \
"
		},
		"globals_side_add_lives": {
			"access": "re",
			"code": "\
56 \
8B51 54 \
8B71 58 \
39FA \
7D 12 \
01C2 \
39F2 \
7C 09 \
C741 5C 00000000 \
89F2 \
8951 54 \
5E \
C3 \
"
		},
		"globals_side_add_bombs": {
			"access": "re",
			"code": "\
56 \
8B51 68 \
8B71 74 \
39F2 \
73 12 \
01C2 \
39F2 \
72 09 \
C741 6C 00000000 \
89F2 \
8951 68 \
5E \
C3 \
"
		},
		"globals_side_sub_lives": {
			"access": "re",
			"code": "\
8B51 54 \
29D2 \
B8 FFFFFFFF \
0F48D0 \
8951 54 \
C3 \
"
		},
		"globals_side_sub_bombs": {
			"access": "re",
			"code": "\
8B51 68 \
29C2 \
B8 00000000 \
0F42D0 \
8951 68 \
C3 \
"
		},
		"globals_side_add_life_fragments": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B59 54 \
8B79 58 \
39FB \
7D 25 \
0341 5C \
BA ABAAAAAA \
89C6 \
F7E2 \
D1EA \
8D0452 \
29C6 \
01DA \
31C0 \
39FA \
0F4CC6 \
0F4DD7 \
8951 54 \
8941 5C \
5E \
5F \
5B \
C3 \
"
		},
		"globals_side_add_bomb_fragments": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B59 68 \
8B79 74 \
39FB \
73 25 \
0341 6C \
BA ABAAAAAA \
89C6 \
F7E2 \
D1EA \
8D0452 \
29C6 \
01DA \
31C0 \
39FA \
0F43F0 \
0F43D7 \
8951 68 \
8971 6C \
5E \
5F \
5B \
C3 \
"
		},
		"globals_side_sub_life_fragments": {
			"access": "re",
			"code": "\
56 \
8B51 54 \
8B71 5C \
8D1452 \
29C6 \
01D6 \
78 18 \
BA ABAAAAAA \
89F0 \
F7E2 \
D1EA \
8D0452 \
29C6 \
8951 54 \
8971 5C \
5E \
C3 \
C741 54 FFFFFFFF \
C741 5C 00000000 \
5E \
C3 \
"
		},
		"globals_side_sub_bomb_fragments": {
			"access": "re",
			"code": "\
56 \
8B51 68 \
8D3452 \
0371 6C \
29C6 \
72 18 \
BA ABAAAAAA \
89F0 \
F7E2 \
D1EA \
8D0452 \
29C6 \
8971 6C \
8951 68 \
5E \
C3 \
0F57C0 \
660FD641 68 \
5E \
C3 \
"
		},
		"collect_life_fragment_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_life_fragments] \
E9 [Rx1215B9] \
"
		},
		"collect_life_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_lives] \
E9 [Rx1215B9] \
"
		},
		"collect_bomb_fragment_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx1215B9] \
A1 <Rx1D1A50> \
85C0 \
0F84 [Rx1215B9] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx115200] \
E9 [Rx1215B9] \
"
		},
		"collect_bomb_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx1215B9] \
A1 <Rx1D1A50> \
85C0 \
0F84 [Rx1215B9] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx115200] \
E9 [Rx1215B9] \
"
		},
		"item_collection_jump_table": {
			"access": "r",
			"code": "\
<Rx1215B9> \
<Rx1215B9> \
<Rx1215B9> \
<codecave:collect_life_fragment_item> \
<codecave:collect_life_item> \
<codecave:collect_bomb_fragment_item> \
<codecave:collect_bomb_item> \
<Rx1215B9> \
<Rx121538> \
<Rx1215B9> \
<Rx1215B9> \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": "Rx16885B"
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": "Rx168854"
		},
		"ZECL_low_ins_max_replace": {
			"addr": "Rx16884A",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": "RxFED1F"
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": "RxFED18"
		},
		"ZECL_high_ins_max_replace": {
			"addr": "RxFED0B",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": "RxFD741",
		},
		"ZECL_int_var_max_replace": {
			"addr": "RxFD737",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": "RxFD4F1"
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": "RxFD4EA"
		},
		"ZECL_int_ptr_max_replace": {
			"addr": "RxFD4E0",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": "RxFC551"
		},
		"ZECL_float_var_max_replace": {
			"addr": "RxFC547",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": "RxFC2B1"
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": "RxFC2AA"
		},
		"ZECL_float_ptr_max_replace": {
			"addr": "RxFC2A0",
		},
		"item_collection_jump_table_replacement": {
			"addr": "Rx12151E",
			"code": "\
48 \
3D 12000000 \
0F87 8F000000 \
0FB680 <codecave:item_collection_case_table> \
FF2485 <codecave:item_collection_jump_table> \
"
		}
	}
}