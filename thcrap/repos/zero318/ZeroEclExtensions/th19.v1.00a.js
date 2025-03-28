{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": "Rx150E34" },
		"zecl_lins_jump_base_count": { "val": 71 },
		"zecl_lins_jump_new_count": { "val": 9 },
		"zecl_lins_case_addr": { "val": "Rx150F50" },
		"zecl_lins_case_base_count": { "val": 98 },
		"zecl_lins_case_new_count": { "val": 9 },
		// High ECL
		"zecl_hins_jump_addr": { "val": "RxF39E8" },
		"zecl_hins_jump_base_count": { "val": 196 },
		"zecl_hins_jump_new_count": { "val": 11 },
		"zecl_hins_case_addr": { "val": "RxF3CF8" },
		"zecl_hins_case_base_count": { "val": 742 },
		"zecl_hins_case_new_count": { "val": 12 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": "RxED100" },
		"zecl_ivar_jump_base_count": { "val": 119 },
		"zecl_ivar_jump_new_count": { "val": 19 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": "RxEC67C" },
		"zecl_iptr_jump_base_count": { "val": 20 },
		"zecl_iptr_jump_new_count": { "val": 2 },
		"zecl_iptr_case_addr": { "val": "RxEC6CC" },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 14 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": "RxEC2E0" },
		"zecl_fvar_jump_base_count": { "val": 119 },
		"zecl_fvar_jump_new_count": { "val": 17 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": "RxEB69C" },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": "RxEB700" },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": "Rx150DC7"
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_int_arg_addr": {
			"type": "p",
			"val": "Rx151450"
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": "Rx151500"
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": "RxF39C6"
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		
		"game_sides_addr": {
			"type": "p",
			"val": "Rx1AE470"
		},
		"card_data_table_addr": {
			"type": "p",
			"val": "Rx1A25B0"
		},
		"card_count": {
			"type": "u32",
			"val": 39 // excluding NULL/BACK
		}
	},
	"codecaves": {
		"ZECL_high_ins_case_table": {
			"code": "\
C3 \
C4 \
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
"
		},
		"ZECL19_thcrap_expr": {
			"access": "re",
			"code": "\
83EC 04 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8B4D FC \
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
895D FC \
B8 <option:card_data_table_addr> \
<nop:8> \
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
8B5D FC \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_count_cards": {
			"access": "re",
			"code": "\
895D FC \
B8 <option:card_data_table_addr> \
<nop:8> \
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
8B5D FC \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_shot_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxABF0] \
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
E8 [RxABF0] \
8945 08 \
DB45 08 \
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
E8 [RxE070] \
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
E8 [RxE070] \
8945 08 \
DB45 08 \
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
E8 [Rx11F10] \
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
E8 [Rx11F10] \
8945 08 \
DB45 08 \
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
E8 [Rx11F10] \
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
E8 [Rx11F10] \
8945 08 \
DB45 08 \
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
E8 [RxA5E0] \
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
E8 [RxA5E0] \
8945 08 \
DB45 08 \
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
E8 [RxA5E0] \
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
E8 [RxA5E0] \
8945 08 \
DB45 08 \
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
8B41 58 \
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
DB41 58 \
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
8B41 58 \
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
DB41 58 \
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
8B41 68 \
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
DB41 68 \
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
8B41 68 \
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
DB41 68 \
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
5E \
C9 \
C2 0400 \
"
		},
		"globals_side_add_lives": {
			"access": "re",
			"code": "\
56 \
8B51 50 \
8B71 54 \
39FA \
7D 12 \
01C2 \
39F2 \
7C 09 \
C741 58 00000000 \
89F2 \
8951 50 \
5E \
C3 \
"
		},
		"globals_side_add_bombs": {
			"access": "re",
			"code": "\
56 \
8B51 64 \
8B71 70 \
39F2 \
73 12 \
01C2 \
39F2 \
72 09 \
C741 68 00000000 \
89F2 \
8951 64 \
5E \
C3 \
"
		},
		"globals_side_sub_lives": {
			"access": "re",
			"code": "\
8B51 50 \
29D2 \
B8 FFFFFFFF \
0F48D0 \
8951 50 \
C3 \
"
		},
		"globals_side_sub_bombs": {
			"access": "re",
			"code": "\
8B51 64 \
29C2 \
B8 00000000 \
0F42D0 \
8951 64 \
C3 \
"
		},
		"globals_side_add_life_fragments": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B59 50 \
8B79 54 \
39FB \
7D 25 \
0341 58 \
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
8951 50 \
8941 58 \
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
8B59 64 \
8B79 70 \
39FB \
73 25 \
0341 68 \
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
8951 64 \
8971 68 \
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
8B51 50 \
8B71 58 \
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
8951 50 \
8971 58 \
5E \
C3 \
C741 50 FFFFFFFF \
C741 58 00000000 \
5E \
C3 \
"
		},
		"globals_side_sub_bomb_fragments": {
			"access": "re",
			"code": "\
56 \
8B51 64 \
8D3452 \
0371 68 \
29C6 \
72 18 \
BA ABAAAAAA \
89F0 \
F7E2 \
D1EA \
8D0452 \
29C6 \
8971 68 \
8951 64 \
5E \
C3 \
0F57C0 \
660FD641 64 \
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
E9 [Rx10EA9D] \
"
		},
		"collect_life_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_lives] \
E9 [Rx10EA9D] \
"
		},
		"collect_bomb_fragment_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx10EA9D] \
A1 <Rx1AE460> \
85C0 \
0F84 [Rx10EA9D] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx102CC0] \
E9 [Rx10EA9D] \
"
		},
		"collect_bomb_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx10EA9D] \
A1 <Rx1AE460> \
85C0 \
0F84 [Rx10EA9D] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx102CC0] \
E9 [Rx10EA9D] \
"
		},
		"item_collection_jump_table": {
			"access": "r",
			"code": "\
<Rx10EA9D> \
<Rx10EA9D> \
<Rx10EA9D> \
<codecave:collect_life_fragment_item> \
<codecave:collect_life_item> \
<codecave:collect_bomb_fragment_item> \
<codecave:collect_bomb_item> \
<Rx10EA9D> \
<Rx10EA1C> \
<Rx10EA9D> \
<Rx10EA9D> \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": "Rx14E980"
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": "Rx14E979"
		},
		"ZECL_low_ins_max_replace": {
			"addr": "Rx14E96F",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": "RxEDC20"
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": "RxEDC19"
		},
		"ZECL_high_ins_max_replace": {
			"addr": "RxEDC0C",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": "RxEC74B",
		},
		"ZECL_int_var_max_replace": {
			"addr": "RxEC741",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": "RxEC4E1"
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": "RxEC4DA"
		},
		"ZECL_int_ptr_max_replace": {
			"addr": "RxEC4D0",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": "RxEB77B"
		},
		"ZECL_float_var_max_replace": {
			"addr": "RxEB771",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": "RxEB4C1"
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": "RxEB4BA"
		},
		"ZECL_float_ptr_max_replace": {
			"addr": "RxEB4B0",
		},
		"item_collection_jump_table_replacement": {
			"addr": "Rx10EA02",
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