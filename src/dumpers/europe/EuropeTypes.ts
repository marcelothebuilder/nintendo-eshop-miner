/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable func-style */
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  static toEuropeTypes(json: string): EuropeSearchResponse<EuropeDocument> {
    return cast(JSON.parse(json), r("EuropeTypes"));
  }

  static europeTypesToJson(value: EuropeSearchResponse<EuropeDocument>): string {
    return JSON.stringify(uncast(value, r("EuropeTypes")), null, 2);
  }
}

function invalidValue(typ: any, val: any): never {
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(typ: any, val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(typ, val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  EuropeTypes: o(
    [
      { json: "responseHeader", js: "responseHeader", typ: r("ResponseHeader") },
      { json: "response", js: "response", typ: r("Response") },
    ],
    false,
  ),
  Response: o(
    [
      { json: "numFound", js: "numFound", typ: 0 },
      { json: "start", js: "start", typ: 0 },
      { json: "docs", js: "docs", typ: a(r("Doc")) },
    ],
    false,
  ),
  Doc: o(
    [
      { json: "fs_id", js: "fs_id", typ: "" },
      { json: "type", js: "type", typ: r("PGS") },
      { json: "pg_s", js: "pg_s", typ: u(undefined, r("PGS")) },
      { json: "title", js: "title", typ: u(undefined, "") },
      { json: "sorting_title", js: "sorting_title", typ: u(undefined, "") },
      { json: "item_in_stock_b", js: "item_in_stock_b", typ: u(undefined, true) },
      { json: "nintendo_switch_online_exclusive_b", js: "nintendo_switch_online_exclusive_b", typ: u(undefined, true) },
      { json: "my-nintendo-store-exclusive_b", js: "my-nintendo-store-exclusive_b", typ: u(undefined, true) },
      { json: "game_series_txt", js: "game_series_txt", typ: u(undefined, a("")) },
      { json: "merch_categories_txt", js: "merch_categories_txt", typ: u(undefined, a(r("MerchCategoriesTxt"))) },
      { json: "price_lowest_f", js: "price_lowest_f", typ: u(undefined, 3.14) },
      { json: "price_regular_f", js: "price_regular_f", typ: u(undefined, 3.14) },
      { json: "price_sorting_f", js: "price_sorting_f", typ: u(undefined, 3.14) },
      { json: "price_has_discount_b", js: "price_has_discount_b", typ: u(undefined, true) },
      { json: "url", js: "url", typ: "" },
      { json: "image_url", js: "image_url", typ: u(undefined, "") },
      { json: "excerpt", js: "excerpt", typ: u(undefined, "") },
      { json: "priority", js: "priority", typ: u(undefined, Date) },
      { json: "_version_", js: "_version_", typ: 0 },
      { json: "change_date", js: "change_date", typ: u(undefined, Date) },
      { json: "system_names_txt", js: "system_names_txt", typ: u(undefined, a(r("Txt"))) },
      {
        json: "support_category_level2_txt",
        js: "support_category_level2_txt",
        typ: u(undefined, a(r("SupportCategoryLevel2Txt"))),
      },
      { json: "system_codes_txt", js: "system_codes_txt", typ: u(undefined, a(r("OriginallyForT"))) },
      { json: "system_type", js: "system_type", typ: u(undefined, a("")) },
      { json: "image_url_h2x1_s", js: "image_url_h2x1_s", typ: u(undefined, "") },
      { json: "deprioritise_b", js: "deprioritise_b", typ: u(undefined, true) },
      { json: "hits_i", js: "hits_i", typ: u(undefined, 0) },
      { json: "popularity", js: "popularity", typ: u(undefined, 0) },
      { json: "dates_released_dts", js: "dates_released_dts", typ: u(undefined, a(Date)) },
      { json: "club_nintendo", js: "club_nintendo", typ: u(undefined, true) },
      { json: "pretty_date_s", js: "pretty_date_s", typ: u(undefined, "") },
      { json: "product_code_txt", js: "product_code_txt", typ: u(undefined, a("")) },
      { json: "image_url_sq_s", js: "image_url_sq_s", typ: u(undefined, "") },
      { json: "gift_finder_detail_page_image_url_s", js: "gift_finder_detail_page_image_url_s", typ: u(undefined, "") },
      { json: "add_on_content_b", js: "add_on_content_b", typ: u(undefined, true) },
      { json: "originally_for_t", js: "originally_for_t", typ: u(undefined, r("OriginallyForT")) },
      { json: "digital_version_b", js: "digital_version_b", typ: u(undefined, true) },
      { json: "title_extras_txt", js: "title_extras_txt", typ: u(undefined, a("")) },
      { json: "age_rating_sorting_i", js: "age_rating_sorting_i", typ: u(undefined, 0) },
      { json: "game_categories_txt", js: "game_categories_txt", typ: u(undefined, a(r("GameCategoriesTxt"))) },
      { json: "publisher", js: "publisher", typ: u(undefined, "") },
      { json: "product_code_ss", js: "product_code_ss", typ: u(undefined, a("")) },
      { json: "internet", js: "internet", typ: u(undefined, true) },
      { json: "nsuid_txt", js: "nsuid_txt", typ: u(undefined, a("")) },
      { json: "date_from", js: "date_from", typ: u(undefined, Date) },
      { json: "image_url_tm_s", js: "image_url_tm_s", typ: u(undefined, "") },
      { json: "language_availability", js: "language_availability", typ: u(undefined, a("")) },
      { json: "street_pass", js: "street_pass", typ: u(undefined, true) },
      { json: "price_discount_percentage_f", js: "price_discount_percentage_f", typ: u(undefined, 3.14) },
      { json: "copyright_s", js: "copyright_s", typ: u(undefined, "") },
      { json: "gift_finder_carousel_image_url_s", js: "gift_finder_carousel_image_url_s", typ: u(undefined, "") },
      { json: "wishlist_email_square_image_url_s", js: "wishlist_email_square_image_url_s", typ: u(undefined, "") },
      { json: "reg_only_hidden", js: "reg_only_hidden", typ: u(undefined, true) },
      { json: "players_to", js: "players_to", typ: u(undefined, 0) },
      {
        json: "wishlist_email_banner640w_image_url_s",
        js: "wishlist_email_banner640w_image_url_s",
        typ: u(undefined, ""),
      },
      { json: "spot_pass", js: "spot_pass", typ: u(undefined, true) },
      { json: "playable_on_txt", js: "playable_on_txt", typ: u(undefined, a(r("OriginallyForT"))) },
      {
        json: "pretty_game_categories_txt",
        js: "pretty_game_categories_txt",
        typ: u(undefined, a(r("PrettyGameCategoriesTxt"))),
      },
      { json: "gift_finder_wishlist_image_url_s", js: "gift_finder_wishlist_image_url_s", typ: u(undefined, "") },
      { json: "switch_game_voucher_b", js: "switch_game_voucher_b", typ: u(undefined, true) },
      { json: "game_category", js: "game_category", typ: u(undefined, a("")) },
      { json: "pretty_agerating_s", js: "pretty_agerating_s", typ: u(undefined, "") },
      { json: "eshop_removed_b", js: "eshop_removed_b", typ: u(undefined, true) },
      { json: "players_from", js: "players_from", typ: u(undefined, 0) },
      { json: "age_rating_type", js: "age_rating_type", typ: u(undefined, r("AgeRatingType")) },
      { json: "datasize_readable_txt", js: "datasize_readable_txt", typ: u(undefined, a("")) },
      { json: "age_rating_value", js: "age_rating_value", typ: u(undefined, "") },
      { json: "developer", js: "developer", typ: u(undefined, "") },
      { json: "physical_version_b", js: "physical_version_b", typ: u(undefined, true) },
      {
        json: "wishlist_email_banner460w_image_url_s",
        js: "wishlist_email_banner460w_image_url_s",
        typ: u(undefined, ""),
      },
      { json: "feed_date_s", js: "feed_date_s", typ: u(undefined, Date) },
      { json: "date_rfc822_s", js: "date_rfc822_s", typ: u(undefined, "") },
      { json: "topic", js: "topic", typ: u(undefined, "") },
      { json: "news_date", js: "news_date", typ: u(undefined, Date) },
      { json: "ean_code_txt", js: "ean_code_txt", typ: u(undefined, a("")) },
      { json: "compatible_controller", js: "compatible_controller", typ: u(undefined, a("")) },
      { json: "off_tv_play_b", js: "off_tv_play_b", typ: u(undefined, true) },
      { json: "multiplayer_mode", js: "multiplayer_mode", typ: u(undefined, r("MultiplayerMode")) },
      { json: "ranking_b", js: "ranking_b", typ: u(undefined, true) },
      { json: "coop_play_b", js: "coop_play_b", typ: u(undefined, true) },
      { json: "game_series_t", js: "game_series_t", typ: u(undefined, "") },
      { json: "near_field_comm_b", js: "near_field_comm_b", typ: u(undefined, true) },
      { json: "gift_finder_description_s", js: "gift_finder_description_s", typ: u(undefined, "") },
      {
        json: "gift_finder_detail_page_store_link_s",
        js: "gift_finder_detail_page_store_link_s",
        typ: u(undefined, ""),
      },
      { json: "interview_title_s", js: "interview_title_s", typ: u(undefined, "") },
      { json: "demo_availability", js: "demo_availability", typ: u(undefined, true) },
      { json: "local_play", js: "local_play", typ: u(undefined, true) },
      { json: "match_play_b", js: "match_play_b", typ: u(undefined, true) },
      { json: "download_play", js: "download_play", typ: u(undefined, true) },
      { json: "ms7_b", js: "ms7_b", typ: u(undefined, true) },
      { json: "ms7leftnavi_b", js: "ms7leftnavi_b", typ: u(undefined, true) },
      {
        json: "compatible_games_compatibility_desc_lineup_1213275_t",
        js: "compatible_games_compatibility_desc_lineup_1213275_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1213275_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1136172_s",
        js: "compatible_games_compatibility_rank_1136172_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1136171_t",
        js: "compatible_games_compatibility_desc_lineup_1136171_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1325999_t",
        js: "compatible_games_compatibility_desc_lineup_1325999_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_891849_s",
        js: "compatible_games_compatibility_rank_891849_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_892779_t",
        js: "compatible_games_compatibility_desc_lineup_892779_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1388641_s",
        js: "compatible_games_compatibility_rank_1388641_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1021489_s",
        js: "compatible_games_compatibility_rank_1021489_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1175211_s",
        js: "compatible_games_compatibility_rank_1175211_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1109483_t",
        js: "compatible_games_compatibility_desc_lineup_1109483_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1109483_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1109483_s",
        js: "compatible_games_compatibility_rank_1109483_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1630878_s",
        js: "compatible_games_compatibility_rank_1630878_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1630878_t",
        js: "compatible_games_compatibility_desc_lineup_1630878_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1630878_T")),
      },
      {
        json: "compatible_games_compatibility_rank_892923_s",
        js: "compatible_games_compatibility_rank_892923_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1173332_t",
        js: "compatible_games_compatibility_desc_lineup_1173332_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1086374_t",
        js: "compatible_games_compatibility_desc_lineup_1086374_t",
        typ: u(undefined, ""),
      },
      { json: "compatible_games_combined_info_s", js: "compatible_games_combined_info_s", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_rank_1086374_s",
        js: "compatible_games_compatibility_rank_1086374_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1173332_s",
        js: "compatible_games_compatibility_rank_1173332_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1233953_s",
        js: "compatible_games_compatibility_rank_1233953_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_864329_t",
        js: "compatible_games_compatibility_desc_lineup_864329_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1025970_s",
        js: "compatible_games_compatibility_rank_1025970_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_s",
        js: "compatible_games_compatibility_rank_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_864849_t",
        js: "compatible_games_compatibility_desc_lineup_864849_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1054663_t",
        js: "compatible_games_compatibility_desc_lineup_1054663_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1054663_TEnum")),
      },
      {
        json: "compatible_games_compatibility_rank_1213275_s",
        js: "compatible_games_compatibility_rank_1213275_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_864849_s",
        js: "compatible_games_compatibility_rank_864849_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1136171_s",
        js: "compatible_games_compatibility_rank_1136171_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1081363_t",
        js: "compatible_games_compatibility_desc_lineup_1081363_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup108136__T")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1136172_t",
        js: "compatible_games_compatibility_desc_lineup_1136172_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_892704_s",
        js: "compatible_games_compatibility_rank_892704_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1325999_s",
        js: "compatible_games_compatibility_rank_1325999_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1021489_t",
        js: "compatible_games_compatibility_desc_lineup_1021489_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1091342_s",
        js: "compatible_games_compatibility_rank_1091342_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1388641_t",
        js: "compatible_games_compatibility_desc_lineup_1388641_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1388641_T")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1225809_t",
        js: "compatible_games_compatibility_desc_lineup_1225809_t",
        typ: u(undefined, ""),
      },
      { json: "figure_tags_t", js: "figure_tags_t", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_desc_lineup_1175211_t",
        js: "compatible_games_compatibility_desc_lineup_1175211_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1173609_t",
        js: "compatible_games_compatibility_desc_lineup_1173609_t",
        typ: u(undefined, ""),
      },
      { json: "compatible_games_list_id_txt", js: "compatible_games_list_id_txt", typ: u(undefined, a("")) },
      {
        json: "compatible_games_compatibility_desc_lineup_986009_t",
        js: "compatible_games_compatibility_desc_lineup_986009_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_893260_s",
        js: "compatible_games_compatibility_rank_893260_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1136169_t",
        js: "compatible_games_compatibility_desc_lineup_1136169_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1101346_t",
        js: "compatible_games_compatibility_desc_lineup_1101346_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1233956_s",
        js: "compatible_games_compatibility_rank_1233956_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_986009_s",
        js: "compatible_games_compatibility_rank_986009_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1348073_s",
        js: "compatible_games_compatibility_rank_1348073_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1348071_t",
        js: "compatible_games_compatibility_desc_lineup_1348071_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1175315_s",
        js: "compatible_games_compatibility_rank_1175315_s",
        typ: u(undefined, ""),
      },
      { json: "compatible_games_list_url_txt", js: "compatible_games_list_url_txt", typ: u(undefined, a("")) },
      {
        json: "compatible_games_compatibility_desc_lineup_893260_t",
        js: "compatible_games_compatibility_desc_lineup_893260_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_891849_t",
        js: "compatible_games_compatibility_desc_lineup_891849_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1275928_t",
        js: "compatible_games_compatibility_desc_lineup_1275928_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1054663_TEnum")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_t",
        js: "compatible_games_compatibility_desc_lineup_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1081362_t",
        js: "compatible_games_compatibility_desc_lineup_1081362_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup108136__T")),
      },
      {
        json: "compatible_games_compatibility_rank_1081363_s",
        js: "compatible_games_compatibility_rank_1081363_s",
        typ: u(undefined, ""),
      },
      { json: "compatible_games_display_name_txt", js: "compatible_games_display_name_txt", typ: u(undefined, a("")) },
      {
        json: "compatible_games_compatibility_desc_lineup_1348072_t",
        js: "compatible_games_compatibility_desc_lineup_1348072_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1231536_t",
        js: "compatible_games_compatibility_desc_lineup_1231536_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1231536_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1026451_s",
        js: "compatible_games_compatibility_rank_1026451_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1175329_t",
        js: "compatible_games_compatibility_desc_lineup_1175329_t",
        typ: u(undefined, ""),
      },
      { json: "figure_collection_s", js: "figure_collection_s", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_desc_lineup_892923_t",
        js: "compatible_games_compatibility_desc_lineup_892923_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1225809_s",
        js: "compatible_games_compatibility_rank_1225809_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1173609_s",
        js: "compatible_games_compatibility_rank_1173609_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1054663_s",
        js: "compatible_games_compatibility_rank_1054663_s",
        typ: u(undefined, ""),
      },
      { json: "figure_collection_value_t", js: "figure_collection_value_t", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_desc_lineup_1233953_t",
        js: "compatible_games_compatibility_desc_lineup_1233953_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1233953_T")),
      },
      { json: "figure_image_url_s", js: "figure_image_url_s", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_rank_1348072_s",
        js: "compatible_games_compatibility_rank_1348072_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1025970_t",
        js: "compatible_games_compatibility_desc_lineup_1025970_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1101292_t",
        js: "compatible_games_compatibility_desc_lineup_1101292_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_892704_t",
        js: "compatible_games_compatibility_desc_lineup_892704_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1101292_s",
        js: "compatible_games_compatibility_rank_1101292_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026451_t",
        js: "compatible_games_compatibility_desc_lineup_1026451_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1026451_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1275928_s",
        js: "compatible_games_compatibility_rank_1275928_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_864329_s",
        js: "compatible_games_compatibility_rank_864329_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_892537_s",
        js: "compatible_games_compatibility_rank_892537_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1081362_s",
        js: "compatible_games_compatibility_rank_1081362_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1231536_s",
        js: "compatible_games_compatibility_rank_1231536_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1348073_t",
        js: "compatible_games_compatibility_desc_lineup_1348073_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1054663_TEnum")),
      },
      {
        json: "compatible_games_compatibility_rank_1175329_s",
        js: "compatible_games_compatibility_rank_1175329_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1313750_t",
        js: "compatible_games_compatibility_desc_lineup_1313750_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1313750_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1136169_s",
        js: "compatible_games_compatibility_rank_1136169_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1101346_s",
        js: "compatible_games_compatibility_rank_1101346_s",
        typ: u(undefined, ""),
      },
      { json: "figure_number_s", js: "figure_number_s", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_desc_lineup_1091342_t",
        js: "compatible_games_compatibility_desc_lineup_1091342_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1091342_T")),
      },
      {
        json: "compatible_games_compatibility_rank_892779_s",
        js: "compatible_games_compatibility_rank_892779_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1233956_t",
        js: "compatible_games_compatibility_desc_lineup_1233956_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1233956_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1348071_s",
        js: "compatible_games_compatibility_rank_1348071_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1175315_t",
        js: "compatible_games_compatibility_desc_lineup_1175315_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_892537_t",
        js: "compatible_games_compatibility_desc_lineup_892537_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1417875_t",
        js: "compatible_games_compatibility_desc_lineup_1417875_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1417875_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1313750_s",
        js: "compatible_games_compatibility_rank_1313750_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026132_t",
        js: "compatible_games_compatibility_desc_lineup_1026132_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1026132_s",
        js: "compatible_games_compatibility_rank_1026132_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1091572_t",
        js: "compatible_games_compatibility_desc_lineup_1091572_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1091572_s",
        js: "compatible_games_compatibility_rank_1091572_s",
        typ: u(undefined, ""),
      },
      { json: "play_mode_tv_mode_b", js: "play_mode_tv_mode_b", typ: u(undefined, true) },
      { json: "play_mode_handheld_mode_b", js: "play_mode_handheld_mode_b", typ: u(undefined, true) },
      { json: "paid_subscription_required_b", js: "paid_subscription_required_b", typ: u(undefined, true) },
      { json: "cloud_saves_b", js: "cloud_saves_b", typ: u(undefined, true) },
      { json: "play_mode_tabletop_mode_b", js: "play_mode_tabletop_mode_b", typ: u(undefined, true) },
      { json: "voice_chat_b", js: "voice_chat_b", typ: u(undefined, true) },
      { json: "miiverse_full_b", js: "miiverse_full_b", typ: u(undefined, true) },
      { json: "motion_control_3ds", js: "motion_control_3ds", typ: u(undefined, true) },
      { json: "play_coins", js: "play_coins", typ: u(undefined, true) },
      { json: "mii_support", js: "mii_support", typ: u(undefined, true) },
      {
        json: "compatible_games_compatibility_rank_1438623_s",
        js: "compatible_games_compatibility_rank_1438623_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1009406_t",
        js: "compatible_games_compatibility_desc_lineup_1009406_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1026137_s",
        js: "compatible_games_compatibility_rank_1026137_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1395713_t",
        js: "compatible_games_compatibility_desc_lineup_1395713_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1009406_s",
        js: "compatible_games_compatibility_rank_1009406_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1173281_t",
        js: "compatible_games_compatibility_desc_lineup_1173281_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1173281_T")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1438623_t",
        js: "compatible_games_compatibility_desc_lineup_1438623_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026137_t",
        js: "compatible_games_compatibility_desc_lineup_1026137_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1026137_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1173281_s",
        js: "compatible_games_compatibility_rank_1173281_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_273841_t",
        js: "compatible_games_compatibility_desc_lineup_273841_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1395713_s",
        js: "compatible_games_compatibility_rank_1395713_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_273841_s",
        js: "compatible_games_compatibility_rank_273841_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1275927_s",
        js: "compatible_games_compatibility_rank_1275927_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1136168_s",
        js: "compatible_games_compatibility_rank_1136168_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_954437_t",
        js: "compatible_games_compatibility_desc_lineup_954437_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup954437_T")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1136168_t",
        js: "compatible_games_compatibility_desc_lineup_1136168_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1136168_T")),
      },
      {
        json: "compatible_games_compatibility_rank_765384_s",
        js: "compatible_games_compatibility_rank_765384_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026143_t",
        js: "compatible_games_compatibility_desc_lineup_1026143_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1026143_T")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026139_t",
        js: "compatible_games_compatibility_desc_lineup_1026139_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1026139_T")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1348382_t",
        js: "compatible_games_compatibility_desc_lineup_1348382_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1025884_s",
        js: "compatible_games_compatibility_rank_1025884_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026505_t",
        js: "compatible_games_compatibility_desc_lineup_1026505_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1233954_t",
        js: "compatible_games_compatibility_desc_lineup_1233954_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1054663_TEnum")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1125616_t",
        js: "compatible_games_compatibility_desc_lineup_1125616_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1025884_TEnum")),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1025884_t",
        js: "compatible_games_compatibility_desc_lineup_1025884_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1025884_TEnum")),
      },
      {
        json: "compatible_games_compatibility_rank_1114009_s",
        js: "compatible_games_compatibility_rank_1114009_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_954437_s",
        js: "compatible_games_compatibility_rank_954437_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1114009_t",
        js: "compatible_games_compatibility_desc_lineup_1114009_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_765384_t",
        js: "compatible_games_compatibility_desc_lineup_765384_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1125616_s",
        js: "compatible_games_compatibility_rank_1125616_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1275927_t",
        js: "compatible_games_compatibility_desc_lineup_1275927_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1026143_s",
        js: "compatible_games_compatibility_rank_1026143_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1348369_t",
        js: "compatible_games_compatibility_desc_lineup_1348369_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1348369_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1026505_s",
        js: "compatible_games_compatibility_rank_1026505_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1026139_s",
        js: "compatible_games_compatibility_rank_1026139_s",
        typ: u(undefined, ""),
      },
      { json: "nintendo_points", js: "nintendo_points", typ: u(undefined, 0) },
      { json: "reddot_id_s", js: "reddot_id_s", typ: u(undefined, "") },
      { json: "page_type_s", js: "page_type_s", typ: u(undefined, r("PageTypeS")) },
      {
        json: "compatible_games_compatibility_desc_lineup_1514327_t",
        js: "compatible_games_compatibility_desc_lineup_1514327_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1082222_s",
        js: "compatible_games_compatibility_rank_1082222_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1082222_t",
        js: "compatible_games_compatibility_desc_lineup_1082222_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1514327_s",
        js: "compatible_games_compatibility_rank_1514327_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1214727_s",
        js: "compatible_games_compatibility_rank_1214727_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1449401_t",
        js: "compatible_games_compatibility_desc_lineup_1449401_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1264661_t",
        js: "compatible_games_compatibility_desc_lineup_1264661_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1054663_TEnum")),
      },
      {
        json: "compatible_games_compatibility_rank_1449401_s",
        js: "compatible_games_compatibility_rank_1449401_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1214727_t",
        js: "compatible_games_compatibility_desc_lineup_1214727_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1203712_t",
        js: "compatible_games_compatibility_desc_lineup_1203712_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_893013_t",
        js: "compatible_games_compatibility_desc_lineup_893013_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_893013_s",
        js: "compatible_games_compatibility_rank_893013_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1026141_s",
        js: "compatible_games_compatibility_rank_1026141_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026141_t",
        js: "compatible_games_compatibility_desc_lineup_1026141_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_858506_s",
        js: "compatible_games_compatibility_rank_858506_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1132221_s",
        js: "compatible_games_compatibility_rank_1132221_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1132221_t",
        js: "compatible_games_compatibility_desc_lineup_1132221_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_858507_t",
        js: "compatible_games_compatibility_desc_lineup_858507_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_858506_t",
        js: "compatible_games_compatibility_desc_lineup_858506_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1260979_t",
        js: "compatible_games_compatibility_desc_lineup_1260979_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1200313_t",
        js: "compatible_games_compatibility_desc_lineup_1200313_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_858507_s",
        js: "compatible_games_compatibility_rank_858507_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1260979_s",
        js: "compatible_games_compatibility_rank_1260979_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1200313_s",
        js: "compatible_games_compatibility_rank_1200313_s",
        typ: u(undefined, ""),
      },
      { json: "related_pages_txt", js: "related_pages_txt", typ: u(undefined, a("")) },
      {
        json: "compatible_games_compatibility_rank_1173295_s",
        js: "compatible_games_compatibility_rank_1173295_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1173295_t",
        js: "compatible_games_compatibility_desc_lineup_1173295_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_892510_s",
        js: "compatible_games_compatibility_rank_892510_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_892510_t",
        js: "compatible_games_compatibility_desc_lineup_892510_t",
        typ: u(undefined, ""),
      },
      { json: "wii_ds_connectivity", js: "wii_ds_connectivity", typ: u(undefined, true) },
      { json: "wii_connect_24", js: "wii_connect_24", typ: u(undefined, true) },
      { json: "nintendo_selects", js: "nintendo_selects", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_desc_lineup_1234324_t",
        js: "compatible_games_compatibility_desc_lineup_1234324_t",
        typ: u(undefined, r("CompatibleGamesCompatibilityDescLineup1234324_T")),
      },
      {
        json: "compatible_games_compatibility_rank_1234324_s",
        js: "compatible_games_compatibility_rank_1234324_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1177455_t",
        js: "compatible_games_compatibility_desc_lineup_1177455_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1177455_s",
        js: "compatible_games_compatibility_rank_1177455_s",
        typ: u(undefined, ""),
      },
      { json: "indie_b", js: "indie_b", typ: u(undefined, true) },
      { json: "hd_rumble_b", js: "hd_rumble_b", typ: u(undefined, true) },
      { json: "ir_motion_camera_b", js: "ir_motion_camera_b", typ: u(undefined, true) },
      { json: "labo_b", js: "labo_b", typ: u(undefined, true) },
      { json: "dlc_shown_b", js: "dlc_shown_b", typ: u(undefined, true) },
      { json: "price_discounted_f", js: "price_discounted_f", typ: u(undefined, 3.14) },
      { json: "oracle_answer_id_en_gb_s", js: "oracle_answer_id_en_gb_s", typ: u(undefined, "") },
      { json: "oracle_answer_id_en_us_s", js: "oracle_answer_id_en_us_s", typ: u(undefined, "") },
      {
        json: "compatible_games_compatibility_rank_1234232_s",
        js: "compatible_games_compatibility_rank_1234232_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1234232_t",
        js: "compatible_games_compatibility_desc_lineup_1234232_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1329566_t",
        js: "compatible_games_compatibility_desc_lineup_1329566_t",
        typ: u(undefined, ""),
      },
      { json: "related_game_id_s", js: "related_game_id_s", typ: u(undefined, "") },
      { json: "pretty_dlc_type_s", js: "pretty_dlc_type_s", typ: u(undefined, r("PGS")) },
      { json: "required_system_txt", js: "required_system_txt", typ: u(undefined, a(r("Txt"))) },
      { json: "dlc_type_s", js: "dlc_type_s", typ: u(undefined, r("DlcTypeS")) },
      { json: "related_game_title_s", js: "related_game_title_s", typ: u(undefined, "") },
      { json: "job_city_s", js: "job_city_s", typ: u(undefined, r("JobCityS")) },
      { json: "job_type_s", js: "job_type_s", typ: u(undefined, r("JobTypeS")) },
      { json: "job_country_s", js: "job_country_s", typ: u(undefined, r("JobCountryS")) },
      {
        json: "compatible_games_compatibility_desc_lineup_1325790_t",
        js: "compatible_games_compatibility_desc_lineup_1325790_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1325790_s",
        js: "compatible_games_compatibility_rank_1325790_s",
        typ: u(undefined, ""),
      },
      { json: "activity_type_s", js: "activity_type_s", typ: u(undefined, r("ActivityTypeS")) },
      {
        json: "compatible_games_compatibility_desc_lineup_1175482_t",
        js: "compatible_games_compatibility_desc_lineup_1175482_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1175482_s",
        js: "compatible_games_compatibility_rank_1175482_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_893949_t",
        js: "compatible_games_compatibility_desc_lineup_893949_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1026071_t",
        js: "compatible_games_compatibility_desc_lineup_1026071_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_893949_s",
        js: "compatible_games_compatibility_rank_893949_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1026071_s",
        js: "compatible_games_compatibility_rank_1026071_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1062553_t",
        js: "compatible_games_compatibility_desc_lineup_1062553_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1375284_s",
        js: "compatible_games_compatibility_rank_1375284_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1062553_s",
        js: "compatible_games_compatibility_rank_1062553_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1375285_t",
        js: "compatible_games_compatibility_desc_lineup_1375285_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1375284_t",
        js: "compatible_games_compatibility_desc_lineup_1375284_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_1375285_s",
        js: "compatible_games_compatibility_rank_1375285_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_rank_961136_s",
        js: "compatible_games_compatibility_rank_961136_s",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_961136_t",
        js: "compatible_games_compatibility_desc_lineup_961136_t",
        typ: u(undefined, ""),
      },
      {
        json: "compatible_games_compatibility_desc_lineup_1347594_t",
        js: "compatible_games_compatibility_desc_lineup_1347594_t",
        typ: u(undefined, ""),
      },
    ],
    false,
  ),
  ResponseHeader: o(
    [
      { json: "status", js: "status", typ: 0 },
      { json: "QTime", js: "QTime", typ: 0 },
      { json: "params", js: "params", typ: r("Params") },
    ],
    false,
  ),
  Params: o(
    [
      { json: "q", js: "q", typ: "" },
      { json: "start", js: "start", typ: "" },
      { json: "fq", js: "fq", typ: "" },
      { json: "sort", js: "sort", typ: "" },
      { json: "rows", js: "rows", typ: "" },
      { json: "wt", js: "wt", typ: "" },
    ],
    false,
  ),
  ActivityTypeS: ["cat_mario_show", "create_and_decorate", "games", "quizzes", "read_and_discover", "video_gallery"],
  AgeRatingType: ["bbfc", "elspa", "pegi"],
  CompatibleGamesCompatibilityDescLineup1025884_TEnum: [
    "You can unlock paint jobs and get a special advantage in battle!",
    "You can unlock paint jobs for your Mech in Blast Ball!",
  ],
  CompatibleGamesCompatibilityDescLineup1026137_T: [
    "You can play fun minigames with your Animal Crossing friends!",
    "You can unlock a special character-themed item!",
    "You can use your amiibo as your board game piece!",
  ],
  CompatibleGamesCompatibilityDescLineup1026139_T: ["You can train your amiibo as a doubles partner!"],
  CompatibleGamesCompatibilityDescLineup1026143_T: ["You can unlock character cards to use in battle!"],
  CompatibleGamesCompatibilityDescLineup1026451_T: [
    "You can enter the Mario League with your Mii!",
    "You can enter the Sonic League with your Mii!",
    "You can get coins or rings to use at the Item Stand!",
  ],
  CompatibleGamesCompatibilityDescLineup1054663_TEnum: [
    "You can unlock a special character-themed item!",
    "You can unlock a special item!",
  ],
  CompatibleGamesCompatibilityDescLineup108136__T: ["You can unlock special puzzles in-game! "],
  CompatibleGamesCompatibilityDescLineup1091342_T: [
    "You can get a Copy Ability for Kirby! ",
    "You can get a special Copy Ability for Kirby! ",
  ],
  CompatibleGamesCompatibilityDescLineup1109483_T: ["You can get in-game coins! "],
  CompatibleGamesCompatibilityDescLineup1136168_T: ["You can unlock special puzzles in-game!"],
  CompatibleGamesCompatibilityDescLineup1173281_T: [
    "You can unlock a Mii Suit! ",
    "You can unlock a Mii Suit based on that character's look! ",
  ],
  CompatibleGamesCompatibilityDescLineup1213275_T: [
    "You can receive a larger selection of fragments.",
    "You can receive a selection of fragments.",
  ],
  CompatibleGamesCompatibilityDescLineup1231536_T: ["You can get extra items. "],
  CompatibleGamesCompatibilityDescLineup1233953_T: [
    "You can unlock a special amiibo box costume for Yoshi.",
    "You can unlock a special character-themed costume for Yoshi.",
  ],
  CompatibleGamesCompatibilityDescLineup1233956_T: [
    "You can unlock one Illustration Piece and additional items.",
    "You can unlock two Illustration Pieces and additional items.",
  ],
  CompatibleGamesCompatibilityDescLineup1234324_T: [
    "You can unlock a special item!",
    "You can use these amiibo to unlock additional stamp sheets",
  ],
  CompatibleGamesCompatibilityDescLineup1313750_T: [
    "You can obtain in-game currency, items or crafting materials.",
    "You can unlock a special Chain Chomp weapon!",
    "You can unlock special costumes!",
  ],
  CompatibleGamesCompatibilityDescLineup1348369_T: ["You can get extra items."],
  CompatibleGamesCompatibilityDescLineup1388641_T: ["You can receive Party Points.", "You can unlock Shiny Stickers."],
  CompatibleGamesCompatibilityDescLineup1417875_T: ["You can summon a group of powerful enemies."],
  CompatibleGamesCompatibilityDescLineup1630878_T: [
    "You can get extra bonus fragments to use in the Shoppe.",
    "You can get fragments to use in the Shoppe.",
  ],
  CompatibleGamesCompatibilityDescLineup954437_T: ["You can unlock a character-themed aircraft skin."],
  DlcTypeS: ["bundleDlcOnly", "dlc"],
  GameCategoriesTxt: [
    "action",
    "adventure",
    "american_football",
    "animal_life",
    "arcade",
    "basketball",
    "board_game",
    "boxing",
    "communication",
    "cooking",
    "education",
    "extreme",
    "fighting",
    "first_person_shooter",
    "football",
    "golf",
    "health_and_fitness",
    "languages",
    "lifestyle",
    "music",
    "other",
    "other_sports",
    "party",
    "platformer",
    "puzzle",
    "rpg",
    "racing",
    "shooter",
    "shop",
    "simulation",
    "sports",
    "strategy",
    "system_tool",
    "tennis",
    "utility",
  ],
  JobCityS: ["Frankfurt am Main"],
  JobCountryS: ["Germany"],
  JobTypeS: ["interns", "professionals"],
  MerchCategoriesTxt: ["accessories-spare-parts", "default-category", "everything-else", "overview"],
  MultiplayerMode: ["alternating", "simultaneous"],
  OriginallyForT: [
    "AGB",
    "AGS",
    "CGB",
    "CLV",
    "CTR",
    "DMG",
    "DOL",
    "FTR",
    "HAC",
    "JAN",
    "KTR",
    "MGB",
    "MIN",
    "NES",
    "NTR",
    "NUS",
    "OXY",
    "RED",
    "RVL",
    "SNS",
    "SPR",
    "TWL",
    "USG",
    "UTL",
    "WUP",
    "ZMN",
    "ZNA",
    "ZOT",
    "ZSD",
  ],
  PageTypeS: ["activity", "home", "standard"],
  PGS: [
    "DLC",
    "EVENT",
    "FIGURE",
    "GAME",
    "INTERVIEW",
    "JOBOFFER",
    "MERCHANDISE",
    "NEWS",
    "OTHER",
    "STANDARD",
    "SUPPORT",
  ],
  PrettyGameCategoriesTxt: [
    "Action",
    "Adventure",
    "American Football",
    "Animal Life",
    "Arcade",
    "Basketball",
    "Board Game",
    "Boxing",
    "Communication",
    "Cooking",
    "Education",
    "Extreme",
    "Fighting",
    "First-Person Shooter",
    "Football",
    "Golf",
    "Health & Fitness",
    "Languages",
    "Lifestyle",
    "Music",
    "Other",
    "Other sports",
    "Party",
    "Platformer",
    "Puzzle",
    "RPG",
    "Racing",
    "Shooter",
    "Shop",
    "Simulation",
    "Sports",
    "Strategy",
    "System Tool",
    "Tennis",
    "Utility",
  ],
  Txt: [
    "Arcade",
    "Commodore 64",
    "Game Boy",
    "Game Boy Advance",
    "Game Boy Advance SP",
    "Game Boy Color",
    "Game Boy Micro",
    "Game Boy Pocket",
    "My Nintendo",
    "NEOGEO",
    "New Nintendo 2DS XL",
    "New Nintendo 3DS",
    "New Nintendo 3DS XL",
    "Nintendo 2DS",
    "Nintendo 3DS",
    "Nintendo 3DS XL",
    "Nintendo 64",
    "Nintendo Account",
    "Nintendo Classic Mini: Nintendo Entertainment System",
    "Nintendo Classic Mini: Super Nintendo Entertainment System",
    "Nintendo DS",
    "Nintendo DS Lite",
    "Nintendo DSi",
    "Nintendo DSi XL",
    "Nintendo Entertainment System",
    "Nintendo GameCube",
    "Nintendo Labo",
    "Nintendo Switch",
    "Pokémon mini",
    "SEGA Game Gear",
    "SEGA MASTER SYSTEM",
    "SEGA MEGA DRIVE",
    "Smart device",
    "Super Nintendo",
    "Super Nintendo Entertainment System",
    "Turbografx (PC Engine)",
    "Wii",
    "Wii U",
  ],
  SupportCategoryLevel2Txt: [
    "about_the_product",
    "accessing_the_account",
    "accessories_and_features",
    "account_management",
    "account_setup",
    "controllers",
    "downloading_software_updates",
    "error_codes",
    "first_time_setup",
    "games",
    "general_information",
    "linking_to_other_accounts",
    "online_connections",
    "pin_reset_online_parental_control_tool",
    "points_and_rewards",
    "purchasing_from_nintendo",
    "screen_and_image",
    "setting_parental_controls",
    "sound",
    "storage",
    "transferring_accounts",
    "tv",
    "using_the_product",
  ],
};
