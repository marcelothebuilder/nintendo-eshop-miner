/* eslint-disable @typescript-eslint/camelcase */
// To parse this data:
//
//   import { Convert, EuropeTypes } from "./file";
//
//   const europeTypes = Convert.toEuropeTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface EuropeSearchResponse<TDocumentType> {
  responseHeader: ResponseHeader;
  response: EuropeInternalResponse<TDocumentType>;
}

export interface EuropeInternalResponse<TDocumentType> {
  numFound: number;
  start: number;
  docs: TDocumentType[];
}

export interface SwitchGameDocument {
  fs_id: string;
  change_date: Date;
  url: string;
  type: DocumentType;
  dates_released_dts: Date[];
  club_nintendo: boolean;
  hd_rumble_b?: boolean;
  multiplayer_mode?: MultiplayerMode;
  pretty_date_s: string;
  play_mode_tv_mode_b?: boolean;
  play_mode_handheld_mode_b?: boolean;
  product_code_txt?: string[];
  image_url_sq_s: string;
  deprioritise_b: boolean;
  pg_s: DocumentType;
  gift_finder_detail_page_image_url_s: string;
  image_url: string;
  originally_for_t: SystemID;
  paid_subscription_required_b?: boolean;
  cloud_saves_b?: boolean;
  digital_version_b: boolean;
  title_extras_txt: string[];
  image_url_h2x1_s: string;
  system_type: string[];
  age_rating_sorting_i: number;
  game_categories_txt: GameCategoriesTxt[];
  play_mode_tabletop_mode_b?: boolean;
  publisher?: string;
  ir_motion_camera_b?: boolean;
  product_code_ss?: string[];
  excerpt: string;
  nsuid_txt?: string[];
  date_from: Date;
  language_availability: string[];
  price_has_discount_b?: boolean;
  gift_finder_description_s?: string;
  price_discount_percentage_f: number;
  title: string;
  sorting_title: string;
  copyright_s?: string;
  gift_finder_carousel_image_url_s: string;
  wishlist_email_square_image_url_s: string;
  players_to: number;
  wishlist_email_banner640w_image_url_s: string;
  voice_chat_b?: boolean;
  playable_on_txt: SystemID[];
  hits_i: number;
  pretty_game_categories_txt: PrettyGameCategoriesTxt[];
  gift_finder_wishlist_image_url_s: string;
  switch_game_voucher_b: boolean;
  game_category: string[];
  system_names_txt: SystemNamesTxt[];
  pretty_agerating_s: string;
  price_regular_f?: number;
  eshop_removed_b: boolean;
  players_from?: number;
  age_rating_type: AgeRatingType;
  gift_finder_detail_page_store_link_s?: string;
  price_sorting_f: number;
  price_lowest_f: number;
  age_rating_value: string;
  physical_version_b: boolean;
  wishlist_email_banner460w_image_url_s: string;
  _version_: number;
  popularity: number;
  demo_availability?: boolean;
  compatible_controller?: string[];
  internet?: boolean;
  game_series_txt?: string[];
  game_series_t?: string;
  near_field_comm_b?: boolean;
  labo_b?: boolean;
  mii_support?: boolean;
  add_on_content_b?: boolean;
  local_play?: boolean;
  dlc_shown_b?: boolean;
  image_url_tm_s?: string;
  developer?: string;
  coop_play_b?: boolean;
  match_play_b?: boolean;
  ranking_b?: boolean;
  price_discounted_f?: number;
  reg_only_hidden?: boolean;
  priority?: Date;
  indie_b?: boolean;
  off_tv_play_b?: boolean;
  download_play?: boolean;
  play_coins?: boolean;
  nintendo_switch_online_exclusive_b?: boolean;
}

export interface EuropeDocument {
  fs_id: string;
  type: DocumentType;
  pg_s?: DocumentType;
  title?: string;
  sorting_title?: string;
  item_in_stock_b?: boolean;
  nintendo_switch_online_exclusive_b?: boolean;
  "my-nintendo-store-exclusive_b"?: boolean;
  game_series_txt?: string[];
  merch_categories_txt?: MerchCategoriesTxt[];
  price_lowest_f?: number;
  price_regular_f?: number;
  price_sorting_f?: number;
  price_has_discount_b?: boolean;
  url: string;
  image_url?: string;
  excerpt?: string;
  priority?: Date;
  _version_: number;
  change_date?: Date;
  system_names_txt?: SystemNamesTxt[];
  support_category_level2_txt?: SupportCategoryLevel2Txt[];
  system_codes_txt?: SystemID[];
  system_type?: string[];
  image_url_h2x1_s?: string;
  deprioritise_b?: boolean;
  hits_i?: number;
  popularity?: number;
  dates_released_dts?: Date[];
  club_nintendo?: boolean;
  pretty_date_s?: string;
  product_code_txt?: string[];
  image_url_sq_s?: string;
  gift_finder_detail_page_image_url_s?: string;
  add_on_content_b?: boolean;
  originally_for_t?: SystemID;
  digital_version_b?: boolean;
  title_extras_txt?: string[];
  age_rating_sorting_i?: number;
  game_categories_txt?: GameCategoriesTxt[];
  publisher?: string;
  product_code_ss?: string[];
  internet?: boolean;
  nsuid_txt?: string[];
  date_from?: Date;
  image_url_tm_s?: string;
  language_availability?: string[];
  street_pass?: boolean;
  price_discount_percentage_f?: number;
  copyright_s?: string;
  gift_finder_carousel_image_url_s?: string;
  wishlist_email_square_image_url_s?: string;
  reg_only_hidden?: boolean;
  players_to?: number;
  wishlist_email_banner640w_image_url_s?: string;
  spot_pass?: boolean;
  playable_on_txt?: SystemID[];
  pretty_game_categories_txt?: PrettyGameCategoriesTxt[];
  gift_finder_wishlist_image_url_s?: string;
  switch_game_voucher_b?: boolean;
  game_category?: string[];
  pretty_agerating_s?: string;
  eshop_removed_b?: boolean;
  players_from?: number;
  age_rating_type?: AgeRatingType;
  datasize_readable_txt?: string[];
  age_rating_value?: string;
  developer?: string;
  physical_version_b?: boolean;
  wishlist_email_banner460w_image_url_s?: string;
  feed_date_s?: Date;
  date_rfc822_s?: string;
  topic?: string;
  news_date?: Date;
  ean_code_txt?: string[];
  compatible_controller?: string[];
  off_tv_play_b?: boolean;
  multiplayer_mode?: MultiplayerMode;
  ranking_b?: boolean;
  coop_play_b?: boolean;
  game_series_t?: string;
  near_field_comm_b?: boolean;
  gift_finder_description_s?: string;
  gift_finder_detail_page_store_link_s?: string;
  interview_title_s?: string;
  demo_availability?: boolean;
  local_play?: boolean;
  match_play_b?: boolean;
  download_play?: boolean;
  ms7_b?: boolean;
  ms7leftnavi_b?: boolean;
  compatible_games_compatibility_desc_lineup_1213275_t?: CompatibleGamesCompatibilityDescLineup1213275_T;
  compatible_games_compatibility_rank_1136172_s?: string;
  compatible_games_compatibility_desc_lineup_1136171_t?: string;
  compatible_games_compatibility_desc_lineup_1325999_t?: string;
  compatible_games_compatibility_rank_891849_s?: string;
  compatible_games_compatibility_desc_lineup_892779_t?: string;
  compatible_games_compatibility_rank_1388641_s?: string;
  compatible_games_compatibility_rank_1021489_s?: string;
  compatible_games_compatibility_rank_1175211_s?: string;
  compatible_games_compatibility_desc_lineup_1109483_t?: CompatibleGamesCompatibilityDescLineup1109483_T;
  compatible_games_compatibility_rank_1109483_s?: string;
  compatible_games_compatibility_rank_1630878_s?: string;
  compatible_games_compatibility_desc_lineup_1630878_t?: CompatibleGamesCompatibilityDescLineup1630878_T;
  compatible_games_compatibility_rank_892923_s?: string;
  compatible_games_compatibility_desc_lineup_1173332_t?: string;
  compatible_games_compatibility_desc_lineup_1086374_t?: string;
  compatible_games_combined_info_s?: string;
  compatible_games_compatibility_rank_1086374_s?: string;
  compatible_games_compatibility_rank_1173332_s?: string;
  compatible_games_compatibility_rank_1233953_s?: string;
  compatible_games_compatibility_desc_lineup_864329_t?: string;
  compatible_games_compatibility_rank_1025970_s?: string;
  compatible_games_compatibility_rank_s?: string;
  compatible_games_compatibility_desc_lineup_864849_t?: string;
  compatible_games_compatibility_desc_lineup_1054663_t?: CompatibleGamesCompatibilityDescLineup1054663_TEnum;
  compatible_games_compatibility_rank_1213275_s?: string;
  compatible_games_compatibility_rank_864849_s?: string;
  compatible_games_compatibility_rank_1136171_s?: string;
  compatible_games_compatibility_desc_lineup_1081363_t?: CompatibleGamesCompatibilityDescLineup108136__T;
  compatible_games_compatibility_desc_lineup_1136172_t?: string;
  compatible_games_compatibility_rank_892704_s?: string;
  compatible_games_compatibility_rank_1325999_s?: string;
  compatible_games_compatibility_desc_lineup_1021489_t?: string;
  compatible_games_compatibility_rank_1091342_s?: string;
  compatible_games_compatibility_desc_lineup_1388641_t?: CompatibleGamesCompatibilityDescLineup1388641_T;
  compatible_games_compatibility_desc_lineup_1225809_t?: string;
  figure_tags_t?: string;
  compatible_games_compatibility_desc_lineup_1175211_t?: string;
  compatible_games_compatibility_desc_lineup_1173609_t?: string;
  compatible_games_list_id_txt?: string[];
  compatible_games_compatibility_desc_lineup_986009_t?: string;
  compatible_games_compatibility_rank_893260_s?: string;
  compatible_games_compatibility_desc_lineup_1136169_t?: string;
  compatible_games_compatibility_desc_lineup_1101346_t?: string;
  compatible_games_compatibility_rank_1233956_s?: string;
  compatible_games_compatibility_rank_986009_s?: string;
  compatible_games_compatibility_rank_1348073_s?: string;
  compatible_games_compatibility_desc_lineup_1348071_t?: string;
  compatible_games_compatibility_rank_1175315_s?: string;
  compatible_games_list_url_txt?: string[];
  compatible_games_compatibility_desc_lineup_893260_t?: string;
  compatible_games_compatibility_desc_lineup_891849_t?: string;
  compatible_games_compatibility_desc_lineup_1275928_t?: CompatibleGamesCompatibilityDescLineup1054663_TEnum;
  compatible_games_compatibility_desc_lineup_t?: string;
  compatible_games_compatibility_desc_lineup_1081362_t?: CompatibleGamesCompatibilityDescLineup108136__T;
  compatible_games_compatibility_rank_1081363_s?: string;
  compatible_games_display_name_txt?: string[];
  compatible_games_compatibility_desc_lineup_1348072_t?: string;
  compatible_games_compatibility_desc_lineup_1231536_t?: CompatibleGamesCompatibilityDescLineup1231536_T;
  compatible_games_compatibility_rank_1026451_s?: string;
  compatible_games_compatibility_desc_lineup_1175329_t?: string;
  figure_collection_s?: string;
  compatible_games_compatibility_desc_lineup_892923_t?: string;
  compatible_games_compatibility_rank_1225809_s?: string;
  compatible_games_compatibility_rank_1173609_s?: string;
  compatible_games_compatibility_rank_1054663_s?: string;
  figure_collection_value_t?: string;
  compatible_games_compatibility_desc_lineup_1233953_t?: CompatibleGamesCompatibilityDescLineup1233953_T;
  figure_image_url_s?: string;
  compatible_games_compatibility_rank_1348072_s?: string;
  compatible_games_compatibility_desc_lineup_1025970_t?: string;
  compatible_games_compatibility_desc_lineup_1101292_t?: string;
  compatible_games_compatibility_desc_lineup_892704_t?: string;
  compatible_games_compatibility_rank_1101292_s?: string;
  compatible_games_compatibility_desc_lineup_1026451_t?: CompatibleGamesCompatibilityDescLineup1026451_T;
  compatible_games_compatibility_rank_1275928_s?: string;
  compatible_games_compatibility_rank_864329_s?: string;
  compatible_games_compatibility_rank_892537_s?: string;
  compatible_games_compatibility_rank_1081362_s?: string;
  compatible_games_compatibility_rank_1231536_s?: string;
  compatible_games_compatibility_desc_lineup_1348073_t?: CompatibleGamesCompatibilityDescLineup1054663_TEnum;
  compatible_games_compatibility_rank_1175329_s?: string;
  compatible_games_compatibility_desc_lineup_1313750_t?: CompatibleGamesCompatibilityDescLineup1313750_T;
  compatible_games_compatibility_rank_1136169_s?: string;
  compatible_games_compatibility_rank_1101346_s?: string;
  figure_number_s?: string;
  compatible_games_compatibility_desc_lineup_1091342_t?: CompatibleGamesCompatibilityDescLineup1091342_T;
  compatible_games_compatibility_rank_892779_s?: string;
  compatible_games_compatibility_desc_lineup_1233956_t?: CompatibleGamesCompatibilityDescLineup1233956_T;
  compatible_games_compatibility_rank_1348071_s?: string;
  compatible_games_compatibility_desc_lineup_1175315_t?: string;
  compatible_games_compatibility_desc_lineup_892537_t?: string;
  compatible_games_compatibility_desc_lineup_1417875_t?: CompatibleGamesCompatibilityDescLineup1417875_T;
  compatible_games_compatibility_rank_1313750_s?: string;
  compatible_games_compatibility_desc_lineup_1026132_t?: string;
  compatible_games_compatibility_rank_1026132_s?: string;
  compatible_games_compatibility_desc_lineup_1091572_t?: string;
  compatible_games_compatibility_rank_1091572_s?: string;
  play_mode_tv_mode_b?: boolean;
  play_mode_handheld_mode_b?: boolean;
  paid_subscription_required_b?: boolean;
  cloud_saves_b?: boolean;
  play_mode_tabletop_mode_b?: boolean;
  voice_chat_b?: boolean;
  miiverse_full_b?: boolean;
  motion_control_3ds?: boolean;
  play_coins?: boolean;
  mii_support?: boolean;
  compatible_games_compatibility_rank_1438623_s?: string;
  compatible_games_compatibility_desc_lineup_1009406_t?: string;
  compatible_games_compatibility_rank_1026137_s?: string;
  compatible_games_compatibility_desc_lineup_1395713_t?: string;
  compatible_games_compatibility_rank_1009406_s?: string;
  compatible_games_compatibility_desc_lineup_1173281_t?: CompatibleGamesCompatibilityDescLineup1173281_T;
  compatible_games_compatibility_desc_lineup_1438623_t?: string;
  compatible_games_compatibility_desc_lineup_1026137_t?: CompatibleGamesCompatibilityDescLineup1026137_T;
  compatible_games_compatibility_rank_1173281_s?: string;
  compatible_games_compatibility_desc_lineup_273841_t?: string;
  compatible_games_compatibility_rank_1395713_s?: string;
  compatible_games_compatibility_rank_273841_s?: string;
  compatible_games_compatibility_rank_1275927_s?: string;
  compatible_games_compatibility_rank_1136168_s?: string;
  compatible_games_compatibility_desc_lineup_954437_t?: CompatibleGamesCompatibilityDescLineup954437_T;
  compatible_games_compatibility_desc_lineup_1136168_t?: CompatibleGamesCompatibilityDescLineup1136168_T;
  compatible_games_compatibility_rank_765384_s?: string;
  compatible_games_compatibility_desc_lineup_1026143_t?: CompatibleGamesCompatibilityDescLineup1026143_T;
  compatible_games_compatibility_desc_lineup_1026139_t?: CompatibleGamesCompatibilityDescLineup1026139_T;
  compatible_games_compatibility_desc_lineup_1348382_t?: string;
  compatible_games_compatibility_rank_1025884_s?: string;
  compatible_games_compatibility_desc_lineup_1026505_t?: string;
  compatible_games_compatibility_desc_lineup_1233954_t?: CompatibleGamesCompatibilityDescLineup1054663_TEnum;
  compatible_games_compatibility_desc_lineup_1125616_t?: CompatibleGamesCompatibilityDescLineup1025884_TEnum;
  compatible_games_compatibility_desc_lineup_1025884_t?: CompatibleGamesCompatibilityDescLineup1025884_TEnum;
  compatible_games_compatibility_rank_1114009_s?: string;
  compatible_games_compatibility_rank_954437_s?: string;
  compatible_games_compatibility_desc_lineup_1114009_t?: string;
  compatible_games_compatibility_desc_lineup_765384_t?: string;
  compatible_games_compatibility_rank_1125616_s?: string;
  compatible_games_compatibility_desc_lineup_1275927_t?: string;
  compatible_games_compatibility_rank_1026143_s?: string;
  compatible_games_compatibility_desc_lineup_1348369_t?: CompatibleGamesCompatibilityDescLineup1348369_T;
  compatible_games_compatibility_rank_1026505_s?: string;
  compatible_games_compatibility_rank_1026139_s?: string;
  nintendo_points?: number;
  reddot_id_s?: string;
  page_type_s?: PageTypeS;
  compatible_games_compatibility_desc_lineup_1514327_t?: string;
  compatible_games_compatibility_rank_1082222_s?: string;
  compatible_games_compatibility_desc_lineup_1082222_t?: string;
  compatible_games_compatibility_rank_1514327_s?: string;
  compatible_games_compatibility_rank_1214727_s?: string;
  compatible_games_compatibility_desc_lineup_1449401_t?: string;
  compatible_games_compatibility_desc_lineup_1264661_t?: CompatibleGamesCompatibilityDescLineup1054663_TEnum;
  compatible_games_compatibility_rank_1449401_s?: string;
  compatible_games_compatibility_desc_lineup_1214727_t?: string;
  compatible_games_compatibility_desc_lineup_1203712_t?: string;
  compatible_games_compatibility_desc_lineup_893013_t?: string;
  compatible_games_compatibility_rank_893013_s?: string;
  compatible_games_compatibility_rank_1026141_s?: string;
  compatible_games_compatibility_desc_lineup_1026141_t?: string;
  compatible_games_compatibility_rank_858506_s?: string;
  compatible_games_compatibility_rank_1132221_s?: string;
  compatible_games_compatibility_desc_lineup_1132221_t?: string;
  compatible_games_compatibility_desc_lineup_858507_t?: string;
  compatible_games_compatibility_desc_lineup_858506_t?: string;
  compatible_games_compatibility_desc_lineup_1260979_t?: string;
  compatible_games_compatibility_desc_lineup_1200313_t?: string;
  compatible_games_compatibility_rank_858507_s?: string;
  compatible_games_compatibility_rank_1260979_s?: string;
  compatible_games_compatibility_rank_1200313_s?: string;
  related_pages_txt?: string[];
  compatible_games_compatibility_rank_1173295_s?: string;
  compatible_games_compatibility_desc_lineup_1173295_t?: string;
  compatible_games_compatibility_rank_892510_s?: string;
  compatible_games_compatibility_desc_lineup_892510_t?: string;
  wii_ds_connectivity?: boolean;
  wii_connect_24?: boolean;
  nintendo_selects?: string;
  compatible_games_compatibility_desc_lineup_1234324_t?: CompatibleGamesCompatibilityDescLineup1234324_T;
  compatible_games_compatibility_rank_1234324_s?: string;
  compatible_games_compatibility_desc_lineup_1177455_t?: string;
  compatible_games_compatibility_rank_1177455_s?: string;
  indie_b?: boolean;
  hd_rumble_b?: boolean;
  ir_motion_camera_b?: boolean;
  labo_b?: boolean;
  dlc_shown_b?: boolean;
  price_discounted_f?: number;
  oracle_answer_id_en_gb_s?: string;
  oracle_answer_id_en_us_s?: string;
  compatible_games_compatibility_rank_1234232_s?: string;
  compatible_games_compatibility_desc_lineup_1234232_t?: string;
  compatible_games_compatibility_desc_lineup_1329566_t?: string;
  related_game_id_s?: string;
  pretty_dlc_type_s?: DocumentType;
  required_system_txt?: SystemNamesTxt[];
  dlc_type_s?: DlcTypeS;
  related_game_title_s?: string;
  job_city_s?: JobCityS;
  job_type_s?: JobTypeS;
  job_country_s?: JobCountryS;
  compatible_games_compatibility_desc_lineup_1325790_t?: string;
  compatible_games_compatibility_rank_1325790_s?: string;
  activity_type_s?: ActivityTypeS;
  compatible_games_compatibility_desc_lineup_1175482_t?: string;
  compatible_games_compatibility_rank_1175482_s?: string;
  compatible_games_compatibility_desc_lineup_893949_t?: string;
  compatible_games_compatibility_desc_lineup_1026071_t?: string;
  compatible_games_compatibility_rank_893949_s?: string;
  compatible_games_compatibility_rank_1026071_s?: string;
  compatible_games_compatibility_desc_lineup_1062553_t?: string;
  compatible_games_compatibility_rank_1375284_s?: string;
  compatible_games_compatibility_rank_1062553_s?: string;
  compatible_games_compatibility_desc_lineup_1375285_t?: string;
  compatible_games_compatibility_desc_lineup_1375284_t?: string;
  compatible_games_compatibility_rank_1375285_s?: string;
  compatible_games_compatibility_rank_961136_s?: string;
  compatible_games_compatibility_desc_lineup_961136_t?: string;
  compatible_games_compatibility_desc_lineup_1347594_t?: string;
}

export enum ActivityTypeS {
  CatMarioShow = "cat_mario_show",
  CreateAndDecorate = "create_and_decorate",
  Games = "games",
  Quizzes = "quizzes",
  ReadAndDiscover = "read_and_discover",
  VideoGallery = "video_gallery",
}

export enum AgeRatingType {
  Bbfc = "bbfc",
  Elspa = "elspa",
  Pegi = "pegi",
}

export enum CompatibleGamesCompatibilityDescLineup1025884_TEnum {
  YouCanUnlockPaintJobsAndGetASpecialAdvantageInBattle = "You can unlock paint jobs and get a special advantage in battle!",
  YouCanUnlockPaintJobsForYourMechInBlastBall = "You can unlock paint jobs for your Mech in Blast Ball!",
}

export enum CompatibleGamesCompatibilityDescLineup1026137_T {
  YouCanPlayFunMinigamesWithYourAnimalCrossingFriends = "You can play fun minigames with your Animal Crossing friends!",
  YouCanUnlockASpecialCharacterThemedItem = "You can unlock a special character-themed item!",
  YouCanUseYourAmiiboAsYourBoardGamePiece = "You can use your amiibo as your board game piece!",
}

export enum CompatibleGamesCompatibilityDescLineup1026139_T {
  YouCanTrainYourAmiiboAsADoublesPartner = "You can train your amiibo as a doubles partner!",
}

export enum CompatibleGamesCompatibilityDescLineup1026143_T {
  YouCanUnlockCharacterCardsToUseInBattle = "You can unlock character cards to use in battle!",
}

export enum CompatibleGamesCompatibilityDescLineup1026451_T {
  YouCanEnterTheMarioLeagueWithYourMii = "You can enter the Mario League with your Mii!",
  YouCanEnterTheSonicLeagueWithYourMii = "You can enter the Sonic League with your Mii!",
  YouCanGetCoinsOrRingsToUseAtTheItemStand = "You can get coins or rings to use at the Item Stand!",
}

export enum CompatibleGamesCompatibilityDescLineup1054663_TEnum {
  YouCanUnlockASpecialCharacterThemedItem = "You can unlock a special character-themed item!",
  YouCanUnlockASpecialItem = "You can unlock a special item!",
}

export enum CompatibleGamesCompatibilityDescLineup108136__T {
  YouCanUnlockSpecialPuzzlesInGame = "You can unlock special puzzles in-game! ",
}

export enum CompatibleGamesCompatibilityDescLineup1091342_T {
  YouCanGetACopyAbilityForKirby = "You can get a Copy Ability for Kirby! ",
  YouCanGetASpecialCopyAbilityForKirby = "You can get a special Copy Ability for Kirby! ",
}

export enum CompatibleGamesCompatibilityDescLineup1109483_T {
  YouCanGetInGameCoins = "You can get in-game coins! ",
}

export enum CompatibleGamesCompatibilityDescLineup1136168_T {
  YouCanUnlockSpecialPuzzlesInGame = "You can unlock special puzzles in-game!",
}

export enum CompatibleGamesCompatibilityDescLineup1173281_T {
  YouCanUnlockAMiiSuit = "You can unlock a Mii Suit! ",
  YouCanUnlockAMiiSuitBasedOnThatCharacterSLook = "You can unlock a Mii Suit based on that character's look! ",
}

export enum CompatibleGamesCompatibilityDescLineup1213275_T {
  YouCanReceiveALargerSelectionOfFragments = "You can receive a larger selection of fragments.",
  YouCanReceiveASelectionOfFragments = "You can receive a selection of fragments.",
}

export enum CompatibleGamesCompatibilityDescLineup1231536_T {
  YouCanGetExtraItems = "You can get extra items. ",
}

export enum CompatibleGamesCompatibilityDescLineup1233953_T {
  YouCanUnlockASpecialAmiiboBoxCostumeForYoshi = "You can unlock a special amiibo box costume for Yoshi.",
  YouCanUnlockASpecialCharacterThemedCostumeForYoshi = "You can unlock a special character-themed costume for Yoshi.",
}

export enum CompatibleGamesCompatibilityDescLineup1233956_T {
  YouCanUnlockOneIllustrationPieceAndAdditionalItems = "You can unlock one Illustration Piece and additional items.",
  YouCanUnlockTwoIllustrationPiecesAndAdditionalItems = "You can unlock two Illustration Pieces and additional items.",
}

export enum CompatibleGamesCompatibilityDescLineup1234324_T {
  YouCanUnlockASpecialItem = "You can unlock a special item!",
  YouCanUseTheseAmiiboToUnlockAdditionalStampSheets = "You can use these amiibo to unlock additional stamp sheets",
}

export enum CompatibleGamesCompatibilityDescLineup1313750_T {
  YouCanObtainInGameCurrencyItemsOrCraftingMaterials = "You can obtain in-game currency, items or crafting materials.",
  YouCanUnlockASpecialChainChompWeapon = "You can unlock a special Chain Chomp weapon!",
  YouCanUnlockSpecialCostumes = "You can unlock special costumes!",
}

export enum CompatibleGamesCompatibilityDescLineup1348369_T {
  YouCanGetExtraItems = "You can get extra items.",
}

export enum CompatibleGamesCompatibilityDescLineup1388641_T {
  YouCanReceivePartyPoints = "You can receive Party Points.",
  YouCanUnlockShinyStickers = "You can unlock Shiny Stickers.",
}

export enum CompatibleGamesCompatibilityDescLineup1417875_T {
  YouCanSummonAGroupOfPowerfulEnemies = "You can summon a group of powerful enemies.",
}

export enum CompatibleGamesCompatibilityDescLineup1630878_T {
  YouCanGetExtraBonusFragmentsToUseInTheShoppe = "You can get extra bonus fragments to use in the Shoppe.",
  YouCanGetFragmentsToUseInTheShoppe = "You can get fragments to use in the Shoppe.",
}

export enum CompatibleGamesCompatibilityDescLineup954437_T {
  YouCanUnlockACharacterThemedAircraftSkin = "You can unlock a character-themed aircraft skin.",
}

export enum DlcTypeS {
  BundleDlcOnly = "bundleDlcOnly",
  Dlc = "dlc",
}

export enum GameCategoriesTxt {
  Action = "action",
  Adventure = "adventure",
  AmericanFootball = "american_football",
  AnimalLife = "animal_life",
  Arcade = "arcade",
  Basketball = "basketball",
  BoardGame = "board_game",
  Boxing = "boxing",
  Communication = "communication",
  Cooking = "cooking",
  Education = "education",
  Extreme = "extreme",
  Fighting = "fighting",
  FirstPersonShooter = "first_person_shooter",
  Football = "football",
  Golf = "golf",
  HealthAndFitness = "health_and_fitness",
  Languages = "languages",
  Lifestyle = "lifestyle",
  Music = "music",
  Other = "other",
  OtherSports = "other_sports",
  Party = "party",
  Platformer = "platformer",
  Puzzle = "puzzle",
  RPG = "rpg",
  Racing = "racing",
  Shooter = "shooter",
  Shop = "shop",
  Simulation = "simulation",
  Sports = "sports",
  Strategy = "strategy",
  SystemTool = "system_tool",
  Tennis = "tennis",
  Utility = "utility",
}

export enum JobCityS {
  FrankfurtAmMain = "Frankfurt am Main",
}

export enum JobCountryS {
  Germany = "Germany",
}

export enum JobTypeS {
  Interns = "interns",
  Professionals = "professionals",
}

export enum MerchCategoriesTxt {
  AccessoriesSpareParts = "accessories-spare-parts",
  DefaultCategory = "default-category",
  EverythingElse = "everything-else",
  Overview = "overview",
}

export enum MultiplayerMode {
  Alternating = "alternating",
  Simultaneous = "simultaneous",
}

export enum SystemID {
  GameboyAdvance = "AGB",
  GameboyAdvanceSP = "AGS",
  GameboyColor = "CGB",
  NESMini = "CLV",
  Nintendo3DS = "CTR",
  GameBoy = "DMG",
  GameCube = "DOL",
  Nintendo2DS = "FTR",
  Switch = "HAC",
  Nintendo2DSXL = "JAN",
  NewNintendo3DS = "KTR",
  GameboyPocket = "MGB",
  PokemonMini = "MIN",
  NintendoEntertainmentSystem = "NES",
  NintendoDS = "NTR",
  Nintendo64 = "NUS",
  GameboyMicro = "OXY",
  NewNintendo3DSXL = "RED",
  Wii = "RVL",
  SuperNintendo = "SNS",
  Nintendo3DSXL = "SPR",
  NintendoDSi = "TWL",
  NintendoDSLite = "USG",
  NintendoDSiXL = "UTL",
  WiiU = "WUP",
  Zmn = "ZMN", // ???
  Zna = "ZNA", // ???
  Zot = "ZOT", // ???
  Zsd = "ZSD", // ???
}

export enum PageTypeS {
  Activity = "activity",
  Home = "home",
  Standard = "standard",
}

export enum DocumentType {
  Dlc = "DLC",
  Event = "EVENT",
  Figure = "FIGURE",
  Game = "GAME",
  Interview = "INTERVIEW",
  Joboffer = "JOBOFFER",
  Merchandise = "MERCHANDISE",
  News = "NEWS",
  Other = "OTHER",
  Standard = "STANDARD",
  Support = "SUPPORT",
}

export enum PrettyGameCategoriesTxt {
  Action = "Action",
  Adventure = "Adventure",
  AmericanFootball = "American Football",
  AnimalLife = "Animal Life",
  Arcade = "Arcade",
  Basketball = "Basketball",
  BoardGame = "Board Game",
  Boxing = "Boxing",
  Communication = "Communication",
  Cooking = "Cooking",
  Education = "Education",
  Extreme = "Extreme",
  Fighting = "Fighting",
  FirstPersonShooter = "First-Person Shooter",
  Football = "Football",
  Golf = "Golf",
  HealthFitness = "Health & Fitness",
  Languages = "Languages",
  Lifestyle = "Lifestyle",
  Music = "Music",
  Other = "Other",
  OtherSports = "Other sports",
  Party = "Party",
  Platformer = "Platformer",
  Puzzle = "Puzzle",
  RPG = "RPG",
  Racing = "Racing",
  Shooter = "Shooter",
  Shop = "Shop",
  Simulation = "Simulation",
  Sports = "Sports",
  Strategy = "Strategy",
  SystemTool = "System Tool",
  Tennis = "Tennis",
  Utility = "Utility",
}

export enum SystemNamesTxt {
  Arcade = "Arcade",
  Commodore64 = "Commodore 64",
  GameBoy = "Game Boy",
  GameBoyAdvance = "Game Boy Advance",
  GameBoyAdvanceSP = "Game Boy Advance SP",
  GameBoyColor = "Game Boy Color",
  GameBoyMicro = "Game Boy Micro",
  GameBoyPocket = "Game Boy Pocket",
  MyNintendo = "My Nintendo",
  Neogeo = "NEOGEO",
  NewNintendo2DSXL = "New Nintendo 2DS XL",
  NewNintendo3DS = "New Nintendo 3DS",
  NewNintendo3DSXL = "New Nintendo 3DS XL",
  Nintendo2DS = "Nintendo 2DS",
  Nintendo3DS = "Nintendo 3DS",
  Nintendo3DSXL = "Nintendo 3DS XL",
  Nintendo64 = "Nintendo 64",
  NintendoAccount = "Nintendo Account",
  NintendoClassicMiniNintendoEntertainmentSystem = "Nintendo Classic Mini: Nintendo Entertainment System",
  NintendoClassicMiniSuperNintendoEntertainmentSystem = "Nintendo Classic Mini: Super Nintendo Entertainment System",
  NintendoDS = "Nintendo DS",
  NintendoDSLite = "Nintendo DS Lite",
  NintendoDSi = "Nintendo DSi",
  NintendoDSiXL = "Nintendo DSi XL",
  NintendoEntertainmentSystem = "Nintendo Entertainment System",
  NintendoGameCube = "Nintendo GameCube",
  NintendoLabo = "Nintendo Labo",
  NintendoSwitch = "Nintendo Switch",
  PokémonMini = "Pokémon mini",
  SEGAGameGear = "SEGA Game Gear",
  SegaMasterSystem = "SEGA MASTER SYSTEM",
  SegaMegaDrive = "SEGA MEGA DRIVE",
  SmartDevice = "Smart device",
  SuperNintendo = "Super Nintendo",
  SuperNintendoEntertainmentSystem = "Super Nintendo Entertainment System",
  TurbografxPCEngine = "Turbografx (PC Engine)",
  Wii = "Wii",
  WiiU = "Wii U",
}

export enum SupportCategoryLevel2Txt {
  AboutTheProduct = "about_the_product",
  AccessingTheAccount = "accessing_the_account",
  AccessoriesAndFeatures = "accessories_and_features",
  AccountManagement = "account_management",
  AccountSetup = "account_setup",
  Controllers = "controllers",
  DownloadingSoftwareUpdates = "downloading_software_updates",
  ErrorCodes = "error_codes",
  FirstTimeSetup = "first_time_setup",
  Games = "games",
  GeneralInformation = "general_information",
  LinkingToOtherAccounts = "linking_to_other_accounts",
  OnlineConnections = "online_connections",
  PinResetOnlineParentalControlTool = "pin_reset_online_parental_control_tool",
  PointsAndRewards = "points_and_rewards",
  PurchasingFromNintendo = "purchasing_from_nintendo",
  ScreenAndImage = "screen_and_image",
  SettingParentalControls = "setting_parental_controls",
  Sound = "sound",
  Storage = "storage",
  TransferringAccounts = "transferring_accounts",
  Tv = "tv",
  UsingTheProduct = "using_the_product",
}

export interface ResponseHeader {
  status: number;
  QTime: number;
  params: Params;
}

export interface Params {
  q: string;
  start: string;
  fq: string;
  sort: string;
  rows: string;
  wt: string;
}
