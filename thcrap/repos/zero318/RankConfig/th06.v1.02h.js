{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x0069BCB0" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x00001A70" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x00001A78" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x00001A74" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 12 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 20 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 14 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 18 }
	},
	"binhacks": {
		"RankConfig_TH6_CallNewFunc_1": {
			"addr": "0x41BDA0",
			"code": "8B4D 08 // E8 [codecave:RankConfig_NewRankFunc] // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F4000 // 3E",
			"expected": "A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 64654700 // 8981 701A0000 // A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 68654700 // 8981 781A0000 // A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 6C654700 // 8981 741A00"
		},
		"RankConfig_TH67_CallNewFunc_2": {
			"addr": "0x41BFBE",
			"code": "6690 // 8B4D 08 // E8 [codecave:RankConfig_NewRankFunc] // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F4000",
			"expected": "A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 2C654700 // 8981 781A0000 // A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 30654700 // 8981 741A0000"
		},
		
		"RankConfig_Survive": {
			"addr": "0x4115C7",
			"expected": "6A 64 // B9 A0BC6900 // E8 ABAF0000"
		},
		"RankConfig_SurviveIncrease": {
			"addr": "0x4115C7"
		},
		"RankConfig_SurviveDecrease": {
			"addr": "0x4115C7"
		},
		
		"RankConfig_GetLifeFromExtend": {
			"addr": "0x41BA0B",
			"expected": "68 C8000000 // B9 A0BC6900 // E8 640B0000"
		},
		"RankConfig_GetLifeFromExtend": {
			"addr": "0x41BA0B",
			"expected": ""
		},
		"RankConfig_GetLifeFromExtend": {
			"addr": "0x41BA0B",
			"expected": ""
		},
		
		"RankConfig_GetLifeFromItem": {
			"addr": "0x41FF67",
			"expected": "68 C8000000 // B9 A0BC6900 // E8 08C6FFFF"
		},
		"RankConfig_GetLifeFromItemIncrease": {
			"addr": "0x41FF67"
		},
		"RankConfig_GetLifeFromItemDecrease": {
			"addr": "0x41FF67"
		}
		
		"RankConfig_GetPowerItem": {
			"addr": "0x41FAD5",
			"expected": "6A 01 // B9 A0BC6900 // E8 9DCAFFFF"
		},
		"RankConfig_GetPowerItemIncrease": {
			"addr": "0x41FAD5"
		},
		"RankConfig_GetPowerItemDecrease": {
			"addr": "0x41FAD5"
		},
		
		"RankConfig_GetPointItemPoC": {
			"addr": "0x41FD59",
			"expected": "6A 1E // B9 A0BC6900 // E8 19C8FFFF"
		},
		"RankConfig_GetPointItemPoCIncrease": {
			"addr": "0x41FD59"
		},
		"RankConfig_GetPointItemPoCDecrease": {
			"addr": "0x41FD59"
		},
		
		"RankConfig_GetPointItem": {
			"addr": "0x41FD67",
			"expected": "6A 03 // B9 A0BC6900 // E8 0BC8FFFF"
		},
		"RankConfig_GetPointItemIncrease": {
			"addr": "0x41FD67"
		},
		"RankConfig_GetPointItemDecrease": {
			"addr": "0x41FD67"
		},
		
		"RankConfig_GetBomb": {
			"addr": "0x41FF2C",
			"expected": "6A 05 // B9 A0BC6900 // E8 46C6FFFF"
		},
		"RankConfig_GetBombIncrease": {
			"addr": "0x41FF2C"
		},
		"RankConfig_GetBombDecrease": {
			"addr": "0x41FF2C"
		}
	}
}